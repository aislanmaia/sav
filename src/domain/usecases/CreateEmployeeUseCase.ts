import IUseCase from '../../core/usecases/IUseCase'
import UserEntity from '../entities/UserEntity'
import IEmployeesRepository from '../repositories/IEmployeesRepository'

export default class CreateEmployeeUseCase
  implements
    IUseCase<
      UserEntity,
      UserEntity | { error: string } | { status: string } | string
    >
{
  constructor(private repository: IEmployeesRepository) {}

  async execute(employee: UserEntity) {
    const newEmployee = this.#buildEmployee(employee)
    if (newEmployee.isFailure) return newEmployee
    return await this.#createEmployee(newEmployee.getValue() as UserEntity)
  }

  #buildEmployee(employee: UserEntity) {
    const result = UserEntity.create(
      employee.email,
      employee.type,
      employee.registry,
      employee.name,
      employee.password,
      employee.passwordConfirmation
    )
    console.log('buildEmployee result employee', result.getValue())
    return result
  }

  async #createEmployee(employee: UserEntity) {
    return await this.repository.createEmployee(employee)
  }
}
