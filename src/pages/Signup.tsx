import { useState } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [registry, setRegistry] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')
  const [employeeType, setEmployeeType] = useState('')

  const handleSubmit = () => {}

  return (
    <div className="flex flex-col justify-center md:items-center md:h-screen">
      <div className="flex flex-col md:w-96 md:items-center bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h3 className="text-2xl pb-8 font-bold">Tech Visita</h3>
        <h2 className="text-2xl pb-8">Cadastro de Funcionário</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Nome do funcionário"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              value={email}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="email@email.com"
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Senha de acesso"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="passwordConfirmation"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Confirmação de senha
            </label>
            <input
              type="password"
              id="passwordConfirmation"
              name="name"
              value={passwordConfirmation}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Repita a senha acima"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="registry"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Matrícula
            </label>
            <input
              type="text"
              id="registry"
              name="registry"
              value={registry}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Número de matrícula"
              onChange={(e) => setRegistry(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="registry"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Tipo de Funcionário
            </label>
            <select
              className="
                form-select
                mb-3
                shadow
                appearance-none
                block
                w-full
                px-2
                py-1
                text-md text-gray-700
                leading-tight
                bg-white bg-clip-padding bg-no-repeat
                border border-solid border-gray-300
                rounded
                transition
                ease-in-out
                focus:text-gray-700 focus:bg-white focus:outline-none focus:shadow-outline
              "
              name="employeeType"
              id="employeeType"
            >
              <option value="attendant">Atendente</option>
              <option value="technician">Técnico</option>
            </select>
          </div>

          <div className="flex items-center justify-between mt-12">
            <Link to="/login" className="no-underline hover:underline">
              Voltar
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

export default SignUp
