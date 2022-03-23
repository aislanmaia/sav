import { useCLientsStore } from '../../stores/clients'
import ClientsListItem from './ClientsListItem'

export default () => {
  const clientsStore = useCLientsStore()
  const clients = clientsStore.get().clients

  const clientsList =
    clients.length > 0 ? (
      clients.map((client, index) => {
        console.log('client', client)
        return <ClientsListItem client={client} key={index} />
      })
    ) : (
      <h3 className="text-slate-500">Não possui clientes ainda.</h3>
    )

  return (
    <>
      <div className="flex flex-col gap-y-1 px-12">
        <div className="flex gap-[90px] overflow-hidden pl-5 pb-2 text-sm text-gray-500">
          <div className="w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6">Nome</div>
          <div className="w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6">Email</div>
          <div className="w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6">
            Telefone
          </div>
          <div className="w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6">
            Endereço
          </div>
          <div className="flex-4 flex w-1/6 overflow-hidden lg:w-1/6 xl:w-1/6"></div>
        </div>
        {clients.length > 0 ? (
          clients.map((client, index) => {
            console.log('client', client)
            return (
              <div className="flex flex-wrap justify-between gap-y-2 overflow-hidden rounded-xl bg-white py-6 pl-4 shadow-sm">
                <ClientsListItem client={client} key={index} />
              </div>
            )
          })
        ) : (
          <h3 className="text-slate-500">Não possui clientes ainda.</h3>
        )}
        {/* <div className="flex flex-wrap justify-between gap-y-2 overflow-hidden rounded-xl bg-white py-6 pl-4 shadow-sm">
          <div className="-mx-1 w-1/6 overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            Nome 1
          </div>
          <div className="-mx-1 w-1/6 overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            Email 1
          </div>
          <div className="-mx-1 w-1/6 overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            Telefone 1
          </div>
          <div className="-mx-1 w-1/6 overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            Endereço 1
          </div>
          <div className="-mx-1 flex w-1/6 place-content-center overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            ...
          </div>
        </div> */}
        {/* <div className="flex flex-wrap justify-between gap-y-2 overflow-hidden rounded-xl bg-white py-6 pl-4 shadow-sm">
          <div className="-mx-1 w-1/6 overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            Nome 2
          </div>
          <div className="-mx-1 w-1/6 overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            Email 2
          </div>
          <div className="-mx-1 w-1/6 overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            Telefone 2
          </div>
          <div className="-mx-1 w-1/6 overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            Endereço 2
          </div>
          <div className="-mx-1 w-1/6 overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
            ...
          </div>
        </div> */}
      </div>
    </>
  )
}
