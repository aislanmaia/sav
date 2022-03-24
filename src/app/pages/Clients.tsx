import { useEffect, useState } from 'react'
import ClientNewDialog from '../components/clients/ClientNewDialog'
import ClientsList from '../components/clients/ClientsList'
import { Client, useCLientsStore } from '../stores/clients'

const Clients = () => {
  const [showNewDialog, setShowNewDialog] = useState(false)
  const clientsStore = useCLientsStore()

  const createClient = (data: Client) => {
    clientsStore.createClient(data)
  }

  useEffect(() => {
    clientsStore.getAllClients()
  }, [])

  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="flex place-content-between p-12">
        <div className="text-3xl font-semibold">Clientes</div>
        <button
          className="w-full rounded-lg bg-indigo-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 sm:w-auto"
          onClick={() => setShowNewDialog(true)}
        >
          + Adicionar
        </button>
      </div>
      <div>
        <ClientsList key={Math.random() * 10000000} />
        <ClientNewDialog
          isOpen={showNewDialog}
          key={Math.random() * 100000}
          setIsOpen={(value) => setShowNewDialog(value)}
          confirm={(client) => createClient(client as Client)}
        />
      </div>
    </div>
  )
}

export default Clients
