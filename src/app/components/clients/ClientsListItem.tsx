import { Client } from '../../stores/clients'
import { PencilIcon, TrashIcon } from '@heroicons/react/solid'

type Props = {
  client: Client
}

export default ({ client }: Props) => {
  const handleAddress = (field: typeof client.address) =>
    `${field.street}, ${field.number}, bairro ${field.neighborhood}`

  return (
    <>
      <div className="-mx-1 flex w-1/6 items-center overflow-hidden pl-2 pr-2 lg:w-1/6 xl:w-1/6">
        {client.name}
      </div>
      <div className="-mx-1 flex w-1/6 flex-grow items-center overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
        {client.email}
      </div>
      <div className="-mx-1 flex w-1/6 flex-none items-center overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
        {client.phone}
      </div>
      <div className="-mx-1 flex w-1/6 flex-grow items-center overflow-hidden pl-2 lg:w-1/6 xl:w-1/6">
        {handleAddress(client.address)}
      </div>
      <div className="-mx-1 flex w-1/6 items-center justify-end gap-x-4 overflow-hidden pl-2 pr-6 lg:w-1/6 xl:w-1/6">
        <PencilIcon className="h-6 w-6 cursor-pointer text-gray-400" />
        <TrashIcon className="h-6 w-6 cursor-pointer text-gray-400" />
      </div>
    </>
  )
}
