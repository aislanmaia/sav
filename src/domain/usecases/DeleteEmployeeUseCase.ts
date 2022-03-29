import IUseCase from '../../core/usecases/IUseCase'
import { Result } from '../../utilities/Result'
import UserEntity from '../entities/UserEntity'
import IEmployeesRepository from '../repositories/IEmployeesRepository'

export default class DeleteEmployeeUseCase
  implements IUseCase<string | number, UserEntity>
{
  constructor(private repository: IEmployeesRepository) {}

  async execute(employeeId: string | number): Promise<Result<UserEntity>> {
    const result = await this.repository.deleteEmployee(employeeId)

    if (result.isFailure) return Result.fail('Cannot delete employee')
    return result as Result<UserEntity>
  }
}
