import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProvider'
import { useUserStore } from '../stores/user'

const ErrorMessage = ({ message }: { message: string }) => (
  <p className="text-xs italic text-red-500">{message}</p>
)

const LoginPage = () => {
  type LocationProps = {
    state: {
      from: Location
    }
  }

  let navigate = useNavigate()
  let location = useLocation() as unknown as LocationProps
  // let auth = useAuth()
  const store = useUserStore()

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

    store.signIn({ email, password }, () => {
      navigate(from, { replace: true })
    })
  }

  return (
    <div className="flex flex-col justify-center md:h-screen md:items-center">
      <div className="mb-4 flex flex-col rounded bg-white px-8 pt-6 pb-8 shadow-md md:w-96 md:items-center">
        <h3 className="pb-8 text-2xl font-bold">Tech Visita</h3>
        <h2 className="pb-8 text-2xl">Entrar no sistema</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-6">
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={fields.email.value}
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
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
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Senha
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className={`appearance-none border shadow ${
                fields.password.error ? 'border-red-500' : ''
              } focus:shadow-outline mb-3 w-full rounded py-2 px-3 leading-tight text-gray-700 focus:outline-none`}
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

          <div className="mt-12 flex items-center justify-between">
            <Link to="/signup" className="no-underline hover:underline">
              Novo cadastro
            </Link>

            <button
              type="submit"
              className="w-full rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
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
