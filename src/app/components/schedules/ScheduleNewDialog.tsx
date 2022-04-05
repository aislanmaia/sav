import { Dialog, Transition } from '@headlessui/react'
import { Dispatch, Fragment, SetStateAction, useEffect, useState } from 'react'
import ScheduleDTO, {
  ClientInfoDTO,
  EmployeeInfoDTO,
} from '../../../data/dto/ScheduleDTO'
import UserDTO from '../../../data/dto/UserDTO'
import ClientEntity from '../../../domain/entities/ClientEntity'
import { ScheduleStatus } from '../../../domain/entities/IScheduleEntity'
import { UserRoles } from '../../../domain/entities/IUserEntity'
import { Result } from '../../../utilities/Result'
import { Client, useCLientsStore } from '../../stores/clients'
import { useUsersStore } from '../../stores/users'
import ScheduleClientSelect from './ScheduleClientSelect'
import ScheduleEmployeeSelect from './ScheduleEmployeeSelect'
import EmployeesRoleSelect from './ScheduleEmployeeSelect'
import ScheduleStatusSelect from './ScheduleStatusSelect'

type Props = {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
  confirm: Dispatch<SetStateAction<ScheduleDTO>>
}

const ScheduleNewDialog = ({ isOpen, setIsOpen, confirm }: Props) => {
  let [clients, setClients] = useState([] as { value: string; label: string }[])
  let [employees, setEmployees] = useState(
    [] as { value: string; label: string }[]
  )
  let [client, setClientInfo] = useState({
    value: '',
    label: 'Selecione um cliente',
  })
  let [employee, setEmployeeInfo] = useState({
    value: '',
    label: 'Selecione um funcionário',
  })
  let [description, setDescription] = useState('')
  let [datetime, setDatetime] = useState('')
  let [datetimeError, setDatetimeError] = useState('')
  let [status, setStatus] = useState(ScheduleStatus.Open)

  const buildClients = (clientsList: Client[]) => {
    const clients = clientsList.map((client) => ({
      value: client.id?.toString() || '',
      label: client.name,
    }))
    setClients(clients)
  }

  const buildEmployees = (employeesList: UserDTO[]) => {
    const employees = employeesList.map((employees) => ({
      value: employees.id?.toString() || '',
      label: employees.name,
    }))
    setEmployees(employees)
  }

  const clientsStore = useCLientsStore()
  const employeesStore = useUsersStore()

  useEffect(() => {
    console.log('use effect')
    clientsStore.getAllClients().then((_) => {
      buildClients(clientsStore.get().clients)
    })

    employeesStore.getAllUsers().then((_) => {
      buildEmployees(employeesStore.get().users)
    })
  }, [])

  const handleDateTime = (datetime: string) => {
    console.log('datetime', datetime)
    const dateIsValid = ScheduleDTO.validateDatetime(new Date(datetime))
    console.log('dateIsValid', dateIsValid)
    if (dateIsValid instanceof Result) {
      setDatetime('')
      setDatetimeError(dateIsValid.error ?? '')
    } else {
      setDatetime(datetime)
      setDatetimeError('')
    }
  }

  const handleConfirm = () => {
    // const newEmployee: ScheduleDTO = new ScheduleDTO({
    //   email,
    //   registry: Number(registry),
    //   firstname: firstName,
    //   lastname: lastName,
    //   role: role,
    //   password,
    //   passwordConfirmation,
    // })
    // confirm(newEmployee)
    setIsOpen(false)
  }

  const buildRole = ({ value }: { value: string }) => {
    setStatus(ScheduleStatus.Open)
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
              <span className="m-0 pr-2 text-2xl">Novo Agendamento</span>
            </Dialog.Title>
          </div>
          <Dialog.Description as="div" className="m-2 flex gap-x-10 pt-2">
            <div className="flex flex-auto">
              <div className="flex flex-auto flex-col">
                {/* <div className="text-1xl pb-4 font-semibold">
                  Dados Pessoais
                </div> */}
                <div className="mb-6">
                  <label
                    htmlFor="clientId"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Cliente
                  </label>
                  <ScheduleClientSelect
                    selected={client}
                    onChange={(selected) => setClientInfo(selected)}
                    options={clients}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="description"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Descrição
                  </label>
                  <textarea
                    id="description"
                    name="description"
                    value={description}
                    className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow-sm focus:outline-none"
                    placeholder="Descrição"
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="employee"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Funcionário
                  </label>
                  <ScheduleEmployeeSelect
                    selected={employee}
                    onChange={(selected) => setEmployeeInfo(selected)}
                    options={employees}
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="datetime"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Data e Hora da visita
                  </label>
                  <input
                    type="datetime-local"
                    id="datetime"
                    name="datetime"
                    value={datetime}
                    className="focus:shadow-outline w-full appearance-none rounded border py-2 px-3 leading-tight text-gray-700 shadow-sm focus:outline-none"
                    placeholder="Número da matrícula"
                    onChange={(e) => handleDateTime(e.target.value)}
                    // onBlur={(e) => handleDateTime(e.target.value)}
                  />
                  {datetimeError && (
                    <span className="text-red-400">{datetimeError}</span>
                  )}
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

export default ScheduleNewDialog
