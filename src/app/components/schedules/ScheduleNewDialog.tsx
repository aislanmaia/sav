import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import UserDTO from '../../../data/dto/UserDTO'
import { UserRoles } from '../../../domain/entities/IUserEntity'
import EmployeesRoleSelect from './EmployeesRoleSelect'

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  confirm: Dispatch<SetStateAction<UserDTO>>
}

const EmployeeNewDialog = ({ isOpen, setIsOpen, confirm }: Props) => {
  let [firstName, setFirstName] = useState('')
  let [lastName, setLastName] = useState('')
  let [email, setEmail] = useState('')
  let [registry, setRegistry] = useState('')
  let [password, setPassword] = useState('')
  let [passwordConfirmation, setPasswordConfirmation] = useState('')
  let [role, setRole] = useState(UserRoles.Attendant)

  const handleConfirm = () => {
    const newEmployee: UserDTO = new UserDTO({
      email,
      registry: Number(registry),
      firstname: firstName,
      lastname: lastName,
      role: role,
      password,
      passwordConfirmation,
    })
    confirm(newEmployee)
    setIsOpen(false)
  }

  const buildRole = ({ value }: { value: string }) => {
    setRole(UserDTO.parseToUserRole(value))
  }

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog
        open={isOpen}
        onClose={setIsOpen}
        as="div"
        className="fixed inset-0 z-10 flex flex-grow items-center justify-center overflow-y-auto"
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay className="fixed inset-0" />
        </Transition.Child>
        {/* <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" /> */}

        <div className="my-8 inline-block w-full max-w-3xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-[5px_5px_500px_1px_rgba(0,0,0,0.3)] transition-all">
          <div className="border-b-[1px] pb-2">
            <Dialog.Title
              as="h3"
              className="text-lg font-medium leading-6 text-gray-900"
            >
              <span className="m-0 pr-2 text-2xl">Novo Funcionário </span>{' '}
            </Dialog.Title>
          </div>
          <Dialog.Description as="div" className="m-2 flex gap-x-10 pt-2">
            <div className="flex flex-auto">
              <div className="flex flex-auto flex-col">
                <div className="text-1xl pb-4 font-semibold">
                  Dados Pessoais
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="firstName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Primeiro Nome
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow-sm focus:outline-none"
                    placeholder="Primeiro nome do funcionário"
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="lastName"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Sobrenome
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="firstName"
                    value={lastName}
                    className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow-sm focus:outline-none"
                    placeholder="Sobrenome do funcionário"
                    onChange={(e) => setLastName(e.target.value)}
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
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow-sm focus:outline-none"
                    placeholder="Email do funcionário"
                    onChange={(e) => setEmail(e.target.value)}
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
                    className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow-sm focus:outline-none"
                    placeholder="Número da matrícula"
                    onChange={(e) => setRegistry(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-auto ">
              <div className="flex flex-auto flex-col">
                <div className="text-1xl pb-4 font-semibold">
                  Dados de Usuário
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Senha de acesso
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={password}
                    className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow-sm focus:outline-none"
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
                    name="passwordConfirmation"
                    value={passwordConfirmation}
                    className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow-sm focus:outline-none"
                    placeholder="Redigite a senha"
                    onChange={(e) => setPasswordConfirmation(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Nível de acesso
                  </label>
                  <EmployeesRoleSelect
                    selected={{ value: role }}
                    onChange={(selected) =>
                      buildRole(selected as { value: string })
                    }
                  />
                </div>
              </div>
            </div>
          </Dialog.Description>

          <div className="flex place-content-end items-center gap-x-4 pt-8">
            <button
              className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => setIsOpen(false)}
            >
              Cancelar
            </button>
            <button
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => handleConfirm()}
            >
              Confirmar
            </button>
          </div>
        </div>
      </Dialog>
    </Transition>
  )
}

export default EmployeeNewDialog
