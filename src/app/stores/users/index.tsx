import { createState, Downgraded, useState } from '@hookstate/core'
import { Persistence } from '@hookstate/persistence'
import EmployeesRepository from '../../../data/datasources/EmployeesRepository'
import UsersRepository from '../../../data/datasources/UsersRepository'
import UserDTO from '../../../data/dto/UserDTO'
import UserEntity from '../../../domain/entities/UserEntity'
import CreateEmployeeUseCase from '../../../domain/usecases/CreateEmployeeUseCase'
import DeleteEmployeeUseCase from '../../../domain/usecases/DeleteEmployeeUseCase'
import GetAllUsersUseCase from '../../../domain/usecases/GetAllEmployeesUseCase'
import LoginUserUseCase from '../../../domain/usecases/LoginUserUseCase'
import UpdateEmployeeUseCase from '../../../domain/usecases/UpdateEmployeeUseCase'
import { Result } from '../../../utilities/Result'

interface UserState {
  user: UserDTO | undefined
  users: UserDTO[]
}

const store = createState<UserState>({
  user: undefined,
  users: [],
})

export const useUsersStore = () => {
  const state = useState(store)
  state.attach(Persistence('users'))
  state.attach(Downgraded)

  return {
    get: () => state.value,
    async signIn(
      params: { email: string; password: string },
      callback: (result: Result<UserDTO>) => void
    ) {
      const result = await new LoginUserUseCase(new UsersRepository()).execute(
        params
      )
      if (result.isSuccess) {
        const user = result.getValue() as UserDTO
        state.user.set(user)
        callback(result as Result<UserDTO>)
      } else {
        state.user.set(undefined)
        callback(result as Result<UserDTO>)
      }
    },

    signOut(callback?: VoidFunction) {
      state.user.set(undefined)
      callback && callback()
    },

    async getAllUsers(
      callback?: (result: UserDTO[] | { error: string } | undefined) => void
    ) {
      const result = await new GetAllUsersUseCase(
        new EmployeesRepository()
      ).execute()
      if (result.isSuccess) {
        state.users.set(result.getValue() as UserDTO[])
      } else {
        state.users.set([])
      }
      callback && callback(result.getValue() as UserDTO[])
    },

    async createEmployee(
      user: UserDTO,
      callback?: (result: UserEntity | { error: string } | undefined) => void
    ) {
      const result = await new CreateEmployeeUseCase(
        new EmployeesRepository()
      ).execute(user)
      if (result.isSuccess) {
        state.users.merge([result.getValue() as UserDTO])
        callback && callback(result.getValue() as UserEntity)
      }
    },

    async updateEmployee(
      employee: UserDTO,
      callback?: (result: Result<UserEntity | { error: string }>) => void
    ) {
      const result = await new UpdateEmployeeUseCase(
        new EmployeesRepository()
      ).execute(employee)
      if (result.isSuccess) {
        const employees = state.users.get()
        const foundIndex = employees.findIndex((c) => c.id === employee.id)
        if (foundIndex > -1) {
          state.users.nested(foundIndex).set(result.getValue() as UserDTO)
        }
        callback && callback(result as Result<UserEntity>)
      }
      callback && callback(result as Result<{ error: string }>)
    },

    async deleteEmployee(
      id: string | number,
      callback?: (result: Result<UserDTO | string>) => void
    ) {
      const result = await new DeleteEmployeeUseCase(
        new EmployeesRepository()
      ).execute(id)
      if (result.isSuccess) {
        console.log('result', result)
        const employees = state.users.get()
        const foundIndex = employees.findIndex((employee) => employee.id === id)
        if (foundIndex > -1) {
          state.users.set((employee) => {
            employee.splice(foundIndex, 1)
            return employee
          })
        }

        callback && callback(result as Result<UserDTO>)
      }
      callback && callback(result as unknown as Result<string>)
    },
  }
}
