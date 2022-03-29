import IUseCase from '../../core/usecases/IUseCase'
import UserDTO from '../../data/dto/UserDTO'
import { Result } from '../../utilities/Result'
import UserEntity from '../entities/UserEntity'
import IEmployeesRepository from '../repositories/IEmployeesRepository'

export default class GetAllEmployeesUseCase
  implements IUseCase<void, UserEntity[] | { error: string }>
{
  constructor(private repository: IEmployeesRepository) {}

  async execute(): Promise<Result<UserEntity[] | { error: string }>> {
    const result = await this.repository.getAllEmployees()

    if (result.isFailure) return Result.fail('Cannot get employees')
    return Result.ok(result.getValue() as UserDTO[])
  }
}
