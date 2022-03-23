import { useEffect } from 'react'
import { useAuth } from '../../providers/AuthProvider'
import ClientsList from '../components/clients/ClientsList'
import { useCLientsStore } from '../stores/clients'

export default () => {
  const clientsStore = useCLientsStore()

  useEffect(() => {
    clientsStore.getAllClients()
  }, [])

  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex place-content-between p-12">
        <div className="text-3xl font-semibold">Clientes</div>
      </div>
      <div>
        <ClientsList />
      </div>
    </div>
  )
}
