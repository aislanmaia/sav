import { createState, useState } from '@hookstate/core'
import { Persistence } from '@hookstate/persistence'
import UserRepository from '../../../data/datasources/UserRepository'
import UserEntity from '../../../domain/entities/UserEntity'
import LoginUserUseCase from '../../../domain/usecases/LoginUserUseCase'
import { Result } from '../../../utilities/Result'

interface UserState {
  user: UserEntity | undefined
}

const store = createState<UserState>({
  user: undefined,
})

export const useUserStore = () => {
  const state = useState(store)
  state.attach(Persistence('user'))

  return {
    get: () => state.value,
    async signIn(
      params: { email: string; password: string },
      callback: (result: Result<UserEntity>) => void
    ) {
      const result = await new LoginUserUseCase(new UserRepository()).execute(
        params
      )
      console.log('result', result)
      if (result.isSuccess) {
        state.user.set(result.getValue())
        callback(result)
      }
    },

    signOut(callback?: VoidFunction) {
      state.user.set(undefined)
      callback && callback()
    },
  }
}
