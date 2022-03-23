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
        <button className="w-full rounded-lg bg-indigo-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto">
          + Adicionar
        </button>
      </div>
      <div>
        <ClientsList />
      </div>
    </div>
  )
}
