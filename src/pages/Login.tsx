import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useAuth } from '../providers/AuthContext'

const LoginPage = () => {
  type LocationProps = {
    state: {
      from: Location
    }
  }

  let navigate = useNavigate()
  let location = useLocation() as unknown as LocationProps
  let auth = useAuth()

  let from = location.state?.from?.pathname || '/'

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    let formData = new FormData(event.currentTarget)
    let username = formData.get('username') as string

    auth.signIn({ username }, () => {
      navigate(from, { replace: true })
    })
  }

  return (
    <div className="flex flex-col justify-center md:items-center md:h-screen">
      <div className="flex flex-col md:w-96 md:items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 className="text-2xl pb-16">Tech Visita</h3>
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="email@email.com"
              required
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
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Senha de acesso"
              required
            />
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
