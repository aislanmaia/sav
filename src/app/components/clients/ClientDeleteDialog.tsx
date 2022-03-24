import { Fragment, Dispatch, SetStateAction, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Client } from '../../stores/clients'

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  confirm: Dispatch<SetStateAction<string | number>>
  clientId: string | number
  clientName: string
}

const ClientDeleteDialog = ({
  isOpen,
  setIsOpen,
  clientId,
  clientName,
  confirm,
}: Props) => {
  const handleConfirm = () => {
    confirm(clientId)
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
              <span className="m-0 pr-2 text-2xl">Deletar cliente </span>{' '}
              <b className="text-1xl">{clientName}</b>
            </Dialog.Title>
          </div>
          <Dialog.Description as="div" className="m-2 flex gap-x-10 pt-2">
            <div className="flex flex-auto">
              <div className="flex flex-auto flex-col">
                <div className="text-1xl pb-4 font-semibold">
                  Você tem certeza?
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
              className="inline-flex w-full justify-center rounded-md border border-transparent bg-red-600 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
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

export default ClientDeleteDialog
