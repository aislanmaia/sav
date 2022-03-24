import { AxiosError } from 'axios'
import { Client } from '../../app/stores/clients'
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
  async createClient(
    client: ClientEntity
  ): Promise<Result<ClientEntity | { status: string }>> {
    return await this.http
      .post(`/clients`, { ...client })
      .then((res) => res.data)
      .catch((e: AxiosError) => {
        console.log('e', e)
        return Result.fail<{ status: string }>(e.code ?? '500')
      })
  }
  async updateClient(client: ClientEntity): Promise<Result<ClientEntity>> {
    return await this.http
      .put(`/clients/${client.id}`, { ...client })
      .then((res) => res.data)
      .catch((e: AxiosError) => {
        console.log('e', e)
        return Result.fail<{ status: string }>(e.code ?? '500')
      })
  }
  async deleteClient(
    clientId: string | number
  ): Promise<Result<ClientEntity | { status: string }>> {
    return await this.http
      .delete(`/clients/${clientId}`)
      .then((res) => res.data)
      .catch((e: AxiosError) => {
        console.log('e', e)
        return Result.fail<{ status: string }>(e.code ?? '500')
      })
  }
}
