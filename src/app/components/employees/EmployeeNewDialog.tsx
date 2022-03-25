import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { User } from '../../stores/users'

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  confirm: Dispatch<SetStateAction<User>>
}

const EmployeeNewDialog = ({ isOpen, setIsOpen, confirm }: Props) => {
  let [name, setName] = useState('')
  let [email, setEmail] = useState('')
  let [phone, setPhone] = useState('')
  let [street, setAddressStreet] = useState('')
  let [number, setAddressNumber] = useState('')
  let [neighborhood, setAddressNeighborhood] = useState('')
  let [city, setAddressCity] = useState('')
  let [uf, setAddressUf] = useState('')

  const handleConfirm = () => {
    const newEmployee: User = {
      name,
      email,
      registry: 0,
      type: 'attendant',
    }
    confirm(newEmployee)
    setIsOpen(false)
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
              <span className="m-0 pr-2 text-2xl">Novo funcionário </span>{' '}
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
                    className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow-sm focus:outline-none"
                    placeholder="Nome do cliente"
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="name"
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
                    placeholder="Email do cliente"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Telefone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={phone}
                    className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow-sm focus:outline-none"
                    placeholder="Telefone"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-auto ">
              <div className="flex flex-auto flex-col">
                <div className="text-1xl pb-4 font-semibold">Endereço</div>

                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Rua
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={street}
                    className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow-sm focus:outline-none"
                    placeholder="Rua"
                    onChange={(e) => setAddressStreet(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Número da residência
                  </label>
                  <input
                    type="text"
                    id="number"
                    name="number"
                    value={number}
                    className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow-sm focus:outline-none"
                    placeholder="Número da residência. Ex: 123"
                    onChange={(e) => setAddressNumber(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Bairro
                  </label>
                  <input
                    type="text"
                    id="neighborhood"
                    name="neighborhood"
                    value={neighborhood}
                    className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow-sm focus:outline-none"
                    placeholder="Bairro"
                    onChange={(e) => setAddressNeighborhood(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Cidade
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={city}
                    className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow-sm focus:outline-none"
                    placeholder="Cidade"
                    onChange={(e) => setAddressCity(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Estado (UF)
                  </label>
                  <input
                    type="text"
                    id="uf"
                    name="uf"
                    value={uf}
                    className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow-sm focus:outline-none"
                    placeholder="Estado (UF). Ex: SP"
                    onChange={(e) => setAddressUf(e.target.value)}
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
