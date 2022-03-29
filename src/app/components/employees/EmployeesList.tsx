import { useUsersStore } from '../../stores/users'
import EmployeesListItem from './EmployeesListItem'

const EmployeesList = () => {
  const usersStore = useUsersStore()
  const employees = usersStore.get().users

  return (
    <>
      <div className="flex flex-col gap-y-1 px-12">
        <div className="flex gap-[90px] overflow-hidden pl-5 pb-2 text-sm text-gray-500">
          <div className="w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6">Nome</div>
          <div className="w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6">Email</div>
          <div className="w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6">
            Matrícula
          </div>
          <div className="w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6">Tipo</div>
          <div className="flex-4 flex w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6"></div>
        </div>
        {employees.length > 0 ? (
          employees.map((employee, index) => {
            return (
              <div
                key={index}
                className="flex flex-wrap justify-between gap-y-2 overflow-hidden rounded-xl bg-white py-6 pl-4 shadow-sm"
              >
                <EmployeesListItem employee={employee} key={employee.id} />
              </div>
            )
          })
        ) : (
          <h3 className="text-slate-500">Não possui funcionários ainda.</h3>
        )}
      </div>
    </>
  )
}

export default EmployeesList
