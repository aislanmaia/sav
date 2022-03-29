import { Result } from '../../utilities/Result'
import UserEntity from '../entities/UserEntity'

export default interface IEmployeesRepository {
  getAllEmployees(): Promise<
    Result<UserEntity[] | { error: string } | { status: string }>
  >

  createEmployee(
    user: UserEntity
  ): Promise<Result<UserEntity | { error: string } | { status: string }>>

  updateEmployee(
    user: UserEntity
  ): Promise<Result<UserEntity | { error: string } | { status: string }>>

  deleteEmployee(
    id: string | number
  ): Promise<Result<UserEntity | { error: string } | { status: string }>>
}
