import { AxiosError } from 'axios'
import ClientEntity from '../../domain/entities/ClientEntity'
import IClientsRepository from '../../domain/repositories/IClientsRepository'
import { Result } from '../../utilities/Result'
import HttpClient from './HttpClient'

export default class ClientsRepository
  extends HttpClient
  implements IClientsRepository
{
  async getAllClients(): Promise<Result<ClientEntity[] | { status: string }>> {
    return await this.http
      .get<Result<ClientEntity[]>>('/clients/all')
      .then((res) => res.data)
      .catch((e: AxiosError) => {
        console.log('e', e)
        return Result.fail<{ status: string }>(e.code ?? '500')
      })
  }
  async createClient(): Promise<Result<ClientEntity | { status: string }>> {
    throw new Error('Method not implemented.')
  }
  async updateClient(client: ClientEntity): Promise<Result<ClientEntity>> {
    throw new Error('Method not implemented.')
  }
  async deleteClient(
    clientId: string | number
  ): Promise<Result<ClientEntity | { status: string }>> {
    throw new Error('Method not implemented.')
  }
}
