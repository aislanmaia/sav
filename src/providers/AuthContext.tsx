import UserRepository from '../data/datasources/UserRepository'
import UserEntity from '../domain/entities/UserEntity'
import LoginUserUseCase from '../domain/usecases/LoginUserUseCase'
import { Result } from '../utilities/Result'

const auth = {
  isAuthenticated: false,
  async signIn(
    params: { email: string; password: string },
    callback: (result: Result<UserEntity>) => void
  ) {
    const result = await new LoginUserUseCase(new UserRepository()).execute(
      params
    )
    console.log('result', result)
    if (result.isSuccess) {
      auth.isAuthenticated = true
      callback(result)
    }
  },
  signOut(callback: VoidFunction) {
    auth.isAuthenticated = false
    setTimeout(callback, 100)
  },
}

export { auth }
