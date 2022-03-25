import { AxiosError } from 'axios'
import UserEntity from '../../domain/entities/UserEntity'
import IUsersRepository from '../../domain/repositories/IUsersRepository'
import { Result } from '../../utilities/Result'
import HttpClient from './HttpClient'

export default class UsersRepository
  extends HttpClient
  implements IUsersRepository
{
  async login(
    email: string,
    password: string
  ): Promise<Result<UserEntity | { error: string } | { status: string }>> {
    return await this.http
      .post<Result<UserEntity | { error: string } | { status: string }>>(
        '/login',
        {
          email: email,
          password: password,
        }
      )
      .then((res) => {
        if (res.data.error)
          return Result.fail<{ error: string }>(res.data.error)
        return res.data
      })
      .catch((e: AxiosError) => {
        console.log('e', e)
        return Result.fail<{ status: string }>(e.code ?? '500')
      })
  }

  async getAllUsers(): Promise<
    Result<UserEntity[] | { error: string } | { status: string }>
  > {
    return this.http
      .get<UserEntity[]>('/employees/all')
      .then((res) => Result.ok(res.data))
      .catch((e: AxiosError) => {
        console.log('e', e)
        return Result.fail<{ status: string }>(e.code ?? '500')
      })
  }
}
