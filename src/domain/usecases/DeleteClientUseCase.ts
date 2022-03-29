import { Client } from '../../app/stores/clients'
import IUseCase from '../../core/usecases/IUseCase'
import { Result } from '../../utilities/Result'
import ClientEntity from '../entities/ClientEntity'
import IClientsRepository from '../repositories/IClientsRepository'

export default class DeleteClientUseCase
  implements IUseCase<string | number, ClientEntity[]>
{
  constructor(private repository: IClientsRepository) {}

  async execute(clientId: string | number): Promise<Result<ClientEntity[]>> {
    const result = await this.repository.deleteClient(clientId)

    if (result.isFailure) {
      return Result.fail('Cannot delete client')
    }
    return Result.ok(result) as unknown as Result<ClientEntity[]>
  }
}
