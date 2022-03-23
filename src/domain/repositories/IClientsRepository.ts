import { Result } from '../../utilities/Result'
import ClientEntity from '../entities/ClientEntity'

export default interface IClientsRepository {
  getAllClients(): Promise<Result<ClientEntity[] | { status: string }>>
  createClient(): Promise<Result<ClientEntity | { status: string }>>
  updateClient(client: ClientEntity): Promise<Result<ClientEntity>>
  deleteClient(
    clientId: string | number
  ): Promise<Result<ClientEntity | { status: string }>>
}
