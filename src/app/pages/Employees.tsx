import { useEffect, useState } from 'react'
import UserDTO from '../../data/dto/UserDTO'
import EmployeeNewDialog from '../components/employees/EmployeeNewDialog'

import EmployeesList from '../components/employees/EmployeesList'
import { useUsersStore } from '../stores/users'

const Employees = () => {
  const [showNewDialog, setShowNewDialog] = useState(false)
  const employeesStore = useUsersStore()

  const createEmployee = (data: UserDTO) => {
    console.log('data', data)
    employeesStore.createEmployee(data)
  }

  useEffect(() => {
    employeesStore.getAllUsers()
  }, [])

  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex place-content-between p-12">
        <div className="text-3xl font-semibold">Funcionários</div>
        <button
          className="w-full rounded-lg bg-indigo-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          onClick={() => setShowNewDialog(true)}
        >
          + Adicionar
        </button>
      </div>
      <div>
        <EmployeesList key={Math.random() * 10000000} />
        <EmployeeNewDialog
          isOpen={showNewDialog}
          key={Math.random() * 100000}
          setIsOpen={(value) => setShowNewDialog(value)}
          confirm={(employee) => createEmployee(employee as UserDTO)}
        />
      </div>
    </div>
  )
}

export default Employees
