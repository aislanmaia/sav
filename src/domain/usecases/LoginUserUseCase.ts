import IUseCase from '../../core/usecases/IUseCase'
import { Result } from '../../utilities/Result'
import UserEntity from '../entities/UserEntity'
import IUserRepository from '../repositories/IUserRepository'

type LoginUserUseCaseParams = {
  email: string
  password: string
}

export default class LoginUserUseCase
  implements IUseCase<{ email: string; password: string }, UserEntity>
{
  constructor(private repository: IUserRepository) {}

  async execute(
    credentials: LoginUserUseCaseParams
  ): Promise<Result<UserEntity>> {
    const result = await this.repository.login(
      credentials.email,
      credentials.password
    )
    if (result.isFailure) {
      return Result.fail('Cannot login user')
    }
    return Result.ok(result) as unknown as Result<UserEntity>
  }
}
