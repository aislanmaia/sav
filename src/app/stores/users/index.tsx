import { createState, Downgraded, useState } from '@hookstate/core'
import { Persistence } from '@hookstate/persistence'
import EmployeesRepository from '../../../data/datasources/EmployeesRepository'
import UsersRepository from '../../../data/datasources/UsersRepository'
import UserDTO from '../../../data/dto/UserDTO'
import UserEntity from '../../../domain/entities/UserEntity'
import CreateEmployeeUseCase from '../../../domain/usecases/CreateEmployeeUseCase'
import GetAllUsersUseCase from '../../../domain/usecases/GetAllEmployees'
import LoginUserUseCase from '../../../domain/usecases/LoginUserUseCase'
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
      callback: (result: Result<UserEntity>) => void
    ) {
      const result = await new LoginUserUseCase(new UsersRepository()).execute(
        params
      )
      if (result.isSuccess) {
        state.user.set(result.getValue() as UserDTO)
        callback(result)
      } else {
        state.user.set(undefined)
        callback(result)
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
        state.users.merge([user])
        callback && callback(result.getValue() as UserEntity)
      }
    },

    async updateEmployee(
      user: UserDTO,
      callback?: (result: UserEntity | { error: string } | undefined) => void
    ) {
      callback && callback(undefined)
    },

    async deleteEmployee(
      id: string | number,
      callback?: (
        result: Result<UserDTO | { error: string }> | undefined
      ) => void
    ) {
      callback && callback(undefined)
    },
  }
}
