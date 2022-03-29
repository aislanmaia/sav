import { PencilIcon, TrashIcon } from '@heroicons/react/solid'
// import { useState } from '@hookstate/core'
import { useState } from 'react'

type Props = {
  schedule: {}
}

const SchedulesListItem = ({ schedule }: Props) => {
  const [showUpdateDialog, setShowUpdateDialog] = useState(false)
  const [showDeleteDialog, setShowDeleteDialog] = useState(false)

  const handleShowUpdateDialog = () => {
    setShowUpdateDialog(!showUpdateDialog)
  }

  const handleShowDeleteDialog = () => {
    setShowDeleteDialog(!showDeleteDialog)
  }

  return (
    <>
      <div className="-mx-1 flex w-1/6 items-center overflow-hidden pl-2 pr-2 lg:w-1/6 xl:w-1/6"></div>
      <div className="-mx-1 flex w-1/6 flex-grow items-center overflow-hidden pl-2 lg:w-1/6 xl:w-1/6"></div>
      <div className="-mx-1 flex w-1/6 flex-none items-center overflow-hidden pl-2 lg:w-1/6 xl:w-1/6"></div>
      <div className="-mx-1 flex w-1/6 flex-grow items-center overflow-hidden pl-2 lg:w-1/6 xl:w-1/6"></div>
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
      {/* <EmployeeUpdateDialog
        isOpen={showUpdateDialog}
        key={Math.random() * 100000}
        employee={employee}
        setIsOpen={(value) => setShowUpdateDialog(value)}
        confirm={(employee) => updateEmployee(employee as UserDTO)}
      />
      <EmployeeDeleteDialog
        isOpen={showDeleteDialog}
        key={employee.id}
        employeeId={employee.id!}
        employeeName={employee.name}
        setIsOpen={(value) => setShowDeleteDialog(value)}
        confirm={(employeeId) => deleteEmployee(employeeId as string)}
      /> */}
    </>
  )
}
export default SchedulesListItem
