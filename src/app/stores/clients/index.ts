import { createState, useState } from '@hookstate/core'
import { Persistence } from '@hookstate/persistence'

interface Address {
  street: string
  number: number
  neighborhood: string
  city: string
  uf: string
}

interface Client {
  name: string
  email: string
  phone: string
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

  return {
    get: () => state.value,
    async getAllClients(callback?: VoidFunction) {
      console.log('get all clients...')
    },
  }
}
