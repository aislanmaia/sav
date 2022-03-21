import { AxiosError } from 'axios'
import UserEntity from '../../domain/entities/UserEntity'
import IUserRepository from '../../domain/repositories/IUserRepository'
import { Result } from '../../utilities/Result'
import HttpClient from './HttpClient'

export default class UserRepository
  extends HttpClient
  implements IUserRepository
{
  async login(
    email: string,
    password: string
  ): Promise<Result<UserEntity | { status: string }>> {
    return await this.http
      .post<Result<UserEntity>>('/login', {
        email: email,
        password: password,
      })
      .then((r) => {
        console.log('r', r)
        return r
      })
      .catch((e: AxiosError) => {
        console.log('e', e)
        return Result.fail<{ status: string }>(e.code ?? '500')
      })
  }
}
