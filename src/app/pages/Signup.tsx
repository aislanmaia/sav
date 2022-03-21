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
    <div className="flex flex-col justify-center md:h-screen md:items-center">
      <div className="mb-4 flex flex-col rounded bg-white px-8 pt-6 pb-8 shadow-md md:w-96 md:items-center">
        <h3 className="pb-8 text-2xl font-bold">Tech Visita</h3>
        <h2 className="pb-8 text-2xl">Cadastro de Funcionário</h2>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Nome
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              placeholder="Nome do funcionário"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
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
              value={email}
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              placeholder="email@email.com"
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              placeholder="Senha de acesso"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="passwordConfirmation"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Confirmação de senha
            </label>
            <input
              type="password"
              id="passwordConfirmation"
              name="name"
              value={passwordConfirmation}
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              placeholder="Repita a senha acima"
              onChange={(e) => setPasswordConfirmation(e.target.value)}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="registry"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Matrícula
            </label>
            <input
              type="text"
              id="registry"
              name="registry"
              value={registry}
              className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow focus:outline-none"
              placeholder="Número de matrícula"
              onChange={(e) => setRegistry(e.target.value)}
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="registry"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Tipo de Funcionário
            </label>
            <select
              className="
                form-select
                text-md
                focus:shadow-outline
                mb-3
                block
                w-full
                appearance-none
                rounded
                border border-solid
                border-gray-300
                bg-white bg-clip-padding bg-no-repeat
                px-2 py-1 leading-tight
                text-gray-700
                shadow
                transition
                ease-in-out focus:bg-white focus:text-gray-700 focus:outline-none
              "
              name="employeeType"
              id="employeeType"
            >
              <option value="attendant">Atendente</option>
              <option value="technician">Técnico</option>
            </select>
          </div>

          <div className="mt-12 flex items-center justify-between">
            <Link to="/login" className="no-underline hover:underline">
              Voltar
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

export default SignUp
