import React, { ReactPropTypes, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

const ErrorMessage = ({ message }: { message: string }) => (
  <p className="text-red-500 text-xs italic">{message}</p>
)

const LoginPage = () => {
  type LocationProps = {
    state: {
      from: Location
    }
  }

  let navigate = useNavigate()
  let location = useLocation() as unknown as LocationProps
  let auth = useAuth()

  const [fields, setFields] = useState({
    email: {
      value: '',
      error: false,
    },
    password: {
      value: '',
      error: false,
    },
  })

  console.log('Login page')
  console.log(useAuth())

  let from = location.state?.from?.pathname || '/'

  function handleFieldError(field: 'email' | 'password') {
    console.log('fields.password.value.length', fields.password.value.length)
    if (fields.password.value.length <= 3) {
      setFields({
        ...fields,
        [field]: { ...fields[field], error: true },
      })
      return
    }
    setFields({
      ...fields,
      [field]: { ...fields[field], error: false },
    })
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    if (!email) {
      handleFieldError('email')
      return
    }

    if (password.length <= 3) {
      handleFieldError('password')
      return
    }

    auth.signIn({ email, password }, () => {
      navigate(from, { replace: true })
    })
  }

  return (
    <div className="flex flex-col justify-center md:items-center md:h-screen">
      <div className="flex flex-col md:w-96 md:items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 className="text-2xl pb-8 font-bold">Tech Visita</h3>
        <h2 className="text-2xl pb-8">Entrar no sistema</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={fields.email.value}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="email@email.com"
              onChange={(e) =>
                setFields({
                  ...fields,
                  email: { ...fields.email, value: e.target.value },
                })
              }
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`shadow appearance-none border ${
                fields.password.error ? 'border-red-500' : ''
              } rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline`}
              placeholder="Senha de acesso"
              required
              onChange={(e) =>
                setFields({
                  ...fields,
                  password: { ...fields.password, value: e.target.value },
                })
              }
              onBlur={() => handleFieldError('password')}
            />
            {fields.password.error ? (
              <ErrorMessage message="Senha inválida" />
            ) : null}
          </div>

          <div className="flex items-center justify-between mt-12">
            <Link to="/signup" className="no-underline hover:underline">
              Novo cadastro
            </Link>

            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default LoginPage
