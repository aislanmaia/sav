import IUsersRepository from '../repositories/IUsersRepository'
import { Result } from '../../utilities/Result'
import UserEntity from '../entities/UserEntity'

export default class GetUserByRegistryUseCase {
  constructor(private repository: IUsersRepository) {}

  // async execute(registry: number): Promise<Result<UserEntity>> {
  //   const result = await this.repository.getUserByRegistry(registry)
  //   if (!result) return Result.fail<UserEntity>('Cannot get user by registry')
  //   return Result.ok<UserEntity>(result)
  // }
}
