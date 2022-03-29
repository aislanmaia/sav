import { Client, useCLientsStore } from '../../stores/clients'
import { PencilIcon, TrashIcon } from '@heroicons/react/solid'
// import { useState } from '@hookstate/core'
import { useState } from 'react'
import EmployeeUpdateDialog from './EmployeeUpdateDialog'
import ClientDeleteDialog from './ClientDeleteDialog'
import { useUsersStore } from '../../stores/users'
import UserDTO from '../../../data/dto/UserDTO'

type Props = {
  employee: UserDTO
}

const EmployeesListItem = ({ employee }: Props) => {
  const [showUpdateDialog, setShowUpdateDialog] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)
  const usersStore = useUsersStore()

  const handleEmployeeType = (type: 'admin' | 'attendant' | 'technician') => {
    console.log('type', type)
    switch (type) {
      case 'admin':
        return 'Admin'
      case 'attendant':
        return 'Atendente'
      case 'technician':
        return 'Técnico'
      default:
        return 'Desconhecido'
    }
  }

  const handleShowUpdateDialog = () => {
    setShowUpdateDialog(!showUpdateDialog)
  }

  const handleShowDeleteDialog = () => {
    setShowDeleteDialog(!showDeleteDialog)
  }

  const updateEmployee = async (data: UserDTO) => {
    await usersStore.updateEmployee(data)
  }

  const deleteUser = async (id: string | number) => {
    // await usersStore.deleteUser(id)
  }

  return (
    <>
      <div className="-mx-1 flex w-1/6 items-center overflow-hidden pl-2 pr-2 lg:w-1/6 xl:w-1/6">
        {employee.name}
      </div>
      <div className="-mx-1 flex w-1/6 flex-grow items-center overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
        {employee.email}
      </div>
      <div className="-mx-1 flex w-1/6 flex-none items-center overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
        {employee.registry}
      </div>
      <div className="-mx-1 flex w-1/6 flex-grow items-center overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
        {handleEmployeeType(employee.role)}
      </div>
      <div className="-mx-1 flex w-1/6 items-center justify-end gap-x-4 overflow-hidden pl-2 pr-6 lg:w-1/6 xl:w-1/6">
        <PencilIcon
          className="h-6 w-6 cursor-pointer text-gray-400"
          onClick={() => handleShowUpdateDialog()}
        />
        <TrashIcon
          className="h-6 w-6 cursor-pointer text-gray-400"
          onClick={() => handleShowDeleteDialog()}
        />
      </div>
      <EmployeeUpdateDialog
        isOpen={showUpdateDialog}
        key={Math.random() * 100000}
        employee={employee}
        setIsOpen={(value) => setShowUpdateDialog(value)}
        confirm={(employee) => updateEmployee(employee as UserDTO)}
      />
      {/*<ClientDeleteDialog
        isOpen={showDeleteDialog}
        key={Math.random() * 100000}
        clientId={client.id!}
        clientName={client.name}
        setIsOpen={(value) => setShowDeleteDialog(value)}
        confirm={(clientId) => deleteClient(clientId as string)}
      /> */}
    </>
  )
}
export default EmployeesListItem
