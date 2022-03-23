import { createState, Downgraded, useState } from '@hookstate/core'
import { Persistence } from '@hookstate/persistence'
import ClientsRepository from '../../../data/datasources/ClientsRepository'
import GetAllClients from '../../../domain/usecases/GetAllClients'
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
      console.log('get all clients...')
      const result = await new GetAllClients(new ClientsRepository()).execute()
      if (result.isSuccess) {
        state.clients.set(result.getValue() || [])
        callback && callback(result)
      }
    },
  }
}
