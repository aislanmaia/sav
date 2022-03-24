import { createState, Downgraded, useState } from '@hookstate/core'
import { Persistence } from '@hookstate/persistence'
import ClientsRepository from '../../../data/datasources/ClientsRepository'
import CreateClient from '../../../domain/usecases/CreateClient'
import GetAllClients from '../../../domain/usecases/GetAllClients'
import UpdateClient from '../../../domain/usecases/UpdateClient'
import { Result } from '../../../utilities/Result'

interface Address {
  street: string
  number: number
  neighborhood: string
  city: string
  uf: string
}

export interface Client {
  id?: string | number
  name: string
  email: string
  phone: number
  address: Address
}

interface ClientsState {
  clients: Client[]
}

const store = createState<ClientsState>({
  clients: <Client[]>[],
})

export const useCLientsStore = () => {
  const state = useState(store)
  state.attach(Persistence('clients'))
  state.attach(Downgraded)

  return {
    get: () => state.value,
    async getAllClients(callback?: (result: Result<Client[]>) => void) {
      const result = await new GetAllClients(new ClientsRepository()).execute()
      if (result.isSuccess) {
        state.clients.set(result.getValue() || [])
        callback && callback(result)
      }
    },
    async updateClient(
      client: Client,
      callback?: (result: Result<Client[]>) => void
    ) {
      const result = await new UpdateClient(new ClientsRepository()).execute(
        client
      )
      if (result.isSuccess) {
        const clients = state.clients.get()
        const foundIndex = clients.findIndex((c) => c.id === client.id)
        if (foundIndex > -1) {
          state.clients.nested(foundIndex).set(client)
        }
        callback && callback(result)
      }
    },
    async createClient(
      client: Client,
      callback?: (result: Result<Client[]>) => void
    ) {
      const result = await new CreateClient(new ClientsRepository()).execute(
        client
      )
      if (result.isSuccess) {
        state.clients.merge([client])
        callback && callback(result)
      }
    },
  }
}
