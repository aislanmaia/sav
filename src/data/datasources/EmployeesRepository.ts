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
    const employeeDTO = this.#buildEmployeeDTO(user)
    return await this.http
      .post(`/employees`, { ...employeeDTO })
      .then((res) => Result.ok(new UserDTO({ ...res.data })))
      .catch((e: AxiosError) => {
        console.log('e', e)
        return Result.fail<{ status: string }>(e.code ?? '500')
      })
  }

  async updateEmployee(
    employee: UserEntity
  ): Promise<Result<UserEntity | { error: string } | { status: string }>> {
    const employeeDTO = this.#buildEmployeeDTO(employee)
    return await this.http
      .put(`/employees/${employee.id}`, { ...employeeDTO })
      .then((res) => Result.ok(new UserDTO({ ...res.data })))
      .catch((e: AxiosError) => {
        console.log('e', e)
        return Result.fail<{ status: string }>(e.code ?? '500')
      })
  }

  async deleteEmployee(
    id: string | number
  ): Promise<Result<UserEntity | { error: string } | { status: string }>> {
    return await this.http
      .delete(`/employees/${id}`)
      .then((res) => Result.ok(new UserDTO({ ...res.data })))
      .catch((err: AxiosError) => {
        console.log('e', err)
        return Result.fail<{ status: string }>(err.code ?? '500')
      })
  }

  #buildEmployeeDTO(employee: UserEntity) {
    return new UserDTO({
      firstname: employee.name.split(' ')[0],
      lastname: employee.name.split(' ')[1],
      role: employee.type,
      ...employee,
    })
  }
}
