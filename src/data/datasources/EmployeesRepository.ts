import { AxiosError } from 'axios'
import UserEntity from '../../domain/entities/UserEntity'
import IEmployeesRepository from '../../domain/repositories/IEmployeesRepository'
import { Result } from '../../utilities/Result'
import UserDTO from '../dto/UserDTO'
import HttpClient from './HttpClient'

export default class EmployeesRepository
  extends HttpClient
  implements IEmployeesRepository
{
  async getAllEmployees(): Promise<
    Result<UserDTO[] | { error: string } | { status: string }>
  > {
    return this.http
      .get<UserDTO[]>('/employees/all')
      .then((res) => Result.ok(res.data.map((d) => new UserDTO({ ...d }))))
      .catch((e: AxiosError) => {
        console.log('e', e)
        return Result.fail<{ status: string }>(e.code ?? '500')
      })
  }

  async createEmployee(
    user: UserEntity
  ): Promise<Result<UserEntity | { error: string } | { status: string }>> {
    const employeeDTO = new UserDTO({
      firstname: user.name.split(' ')[0],
      lastname: user.name.split(' ')[1],
      role: user.type,
      ...user,
    })
    console.log('user', user)
    console.log('userDTO', employeeDTO)
    return await this.http
      .post(`/employees`, { ...employeeDTO })
      .then((res) => res.data)
      .catch((e: AxiosError) => {
        console.log('e', e)
        return Result.fail<{ status: string }>(e.code ?? '500')
      })
  }
}
