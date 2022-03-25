import { createState, Downgraded, useState } from '@hookstate/core'
import { Persistence } from '@hookstate/persistence'
import UsersRepository from '../../../data/datasources/UsersRepository'
import UserEntity from '../../../domain/entities/UserEntity'
import GetAllUsersUseCase from '../../../domain/usecases/GetAllUsers'
import LoginUserUseCase from '../../../domain/usecases/LoginUserUseCase'
import { Result } from '../../../utilities/Result'

export interface User {
  id?: string | number
  name?: string
  email: string
  registry: number
  type: 'admin' | 'attendant' | 'technician'
}
interface UserState {
  user: User | undefined
  users: User[]
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
      callback: (result: Result<User>) => void
    ) {
      const result = await new LoginUserUseCase(new UsersRepository()).execute(
        params
      )
      if (result.isSuccess) {
        state.user.set(result.getValue())
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
      callback?: (result: User[] | { error: string } | undefined) => void
    ) {
      const result = await new GetAllUsersUseCase(
        new UsersRepository()
      ).execute()
      if (result.isSuccess) {
        state.users.set(result.getValue() as User[])
      } else {
        state.users.set([])
      }
      callback && callback(result.getValue())
    },

    async createUser(
      user: User,
      callback?: (result: UserEntity[] | { error: string } | undefined) => void
    ) {
      // const result = await new GetAllUsersUseCase(
      //   new UsersRepository()
      // ).execute()
      // result.getValue()
      // if (result.isSuccess) {
      //   state.users.set(result.getValue() as UserEntity[])
      // } else {
      //   state.users.set([])
      // }
      callback && callback(undefined)
    },

    async updateUser(
      user: User,
      callback?: (result: UserEntity | { error: string } | undefined) => void
    ) {
      callback && callback(undefined)
    },

    async deleteUser(
      id: string | number,
      callback?: (result: Result<User | { error: string }> | undefined) => void
    ) {
      callback && callback(undefined)
    },
  }
}
