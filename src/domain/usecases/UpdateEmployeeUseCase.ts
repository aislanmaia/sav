import IUseCase from '../../core/usecases/IUseCase'
import UserEntity from '../entities/UserEntity'
import IEmployeesRepository from '../repositories/IEmployeesRepository'

export default class UpdateEmployeeUseCase
  implements
    IUseCase<
      UserEntity,
      UserEntity | { error: string } | { status: string } | string
    >
{
  constructor(private repository: IEmployeesRepository) {}

  async execute(employee: UserEntity) {
    return await this.repository.updateEmployee(employee)
  }
}
