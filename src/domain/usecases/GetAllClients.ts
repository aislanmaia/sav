import IUseCase from '../../core/usecases/IUseCase'
import { Result } from '../../utilities/Result'
import ClientEntity from '../entities/ClientEntity'
import UserEntity from '../entities/UserEntity'
import IClientsRepository from '../repositories/IClientsRepository'
import IUserRepository from '../repositories/IUserRepository'

type GetAllClientsParams = {}

export default class GetAllClients
  implements IUseCase<{ email: string; password: string }, ClientEntity[]>
{
  constructor(private repository: IClientsRepository) {}

  async execute(): Promise<Result<ClientEntity[]>> {
    const result = await this.repository.getAllClients()

    if (result.isFailure) {
      return Result.fail('Cannot get users')
    }
    return Result.ok(result) as unknown as Result<ClientEntity[]>

    return Result.ok(result) as unknown as Result<ClientEntity[]>
  }
}
