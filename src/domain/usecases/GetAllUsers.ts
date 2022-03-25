import IUseCase from '../../core/usecases/IUseCase'
import { Result } from '../../utilities/Result'
import UserEntity from '../entities/UserEntity'
import IUsersRepository from '../repositories/IUsersRepository'

export default class GetAllUsersUseCase
  implements IUseCase<void, UserEntity[] | { error: string }>
{
  constructor(private repository: IUsersRepository) {}

  async execute(): Promise<Result<UserEntity[] | { error: string }>> {
    const result = await this.repository.getAllUsers()

    if (result.isSuccess) {
      let users = result.getValue() as UserEntity[]
      // users = users.map((user) =>
      //   UserEntity.create(
      //     user.email,
      //     user.type,
      //     user.registry,
      //     user['username']
      //   )
      // )
      // console.log('users', users)
      return Result.ok(users)
    }

    if (result.isFailure) return Result.fail('Cannot get users')
    return Result.ok(result.getValue() as UserEntity[])
  }
}
