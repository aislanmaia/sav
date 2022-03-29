import { Dispatch, Fragment, SetStateAction, useState } from 'react'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'
import { UserRoles } from '../../../domain/entities/IUserEntity'

type RoleOption = {
  value: UserRoles
}

const options: RoleOption[] = [
  { value: UserRoles.Attendant },
  { value: UserRoles.Technician },
]

// type Option = {
//   name: string
// }

// interface Props {
//   defaultOption: Option
//   options: Option[]
// }

type Props = {
  selected?: { value: string }
  onChange: Dispatch<SetStateAction<{ value: string }>>
}

const EmployeesRoleSelect = ({ selected, onChange }: Props) => {
  const buildOptions = (options: RoleOption[]): { value: string }[] => {
    return options.map((option) => {
      if (option.value === UserRoles.Attendant) return { value: 'Atendente' }
      if (option.value === UserRoles.Technician) return { value: 'Técnico' }
      return { value: 'Atendente' }
    })
  }
  const buildSelect = ({ value }: { value: string }) => {
    if (value === UserRoles.Attendant) return 'Atendente'
    if (value === UserRoles.Technician) return 'Técnico'
    return 'Atendente'
  }
  const defaultValue = buildOptions(options)[0]

  // const [selected, setSelected] = useState(buildOptions(options)[0])

  return (
    <div className="relative w-full">
      <Listbox value={selected ?? defaultValue} onChange={onChange}>
        <div className="relative mt-1 w-full">
          <Listbox.Button className="w-full cursor-default rounded-md border bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-white sm:text-sm">
            <span className="block truncate">
              {selected ? buildSelect(selected) : defaultValue.value}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <SelectorIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {buildOptions(options).map((option, optionIndex) => (
                <Listbox.Option
                  key={optionIndex}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? 'bg-indigo-500 text-white' : 'text-gray-900'
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? 'font-medium' : 'font-normal'
                        }`}
                      >
                        {option.value}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-indigo-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  )
}

export default EmployeesRoleSelect
