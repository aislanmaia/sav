import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, UserCircleIcon } from '@heroicons/react/outline'
import { Fragment } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import classNames from 'classnames'
import { useUsersStore } from '../stores/users'
// import notify from './alerts/Notify'
import toast, { Toaster } from 'react-hot-toast'
import Alert from './alerts/Alert'

const navigation = [
  { name: 'Clientes', href: '/clientes', current: true },
  { name: 'Funcionários', href: '/funcionarios', current: false },
  { name: 'Agendamentos', href: '/agendamentos', current: false },
]

const notify = () => toast.success('Here is my toast!')

const AppBar = () => {
  const navigate = useNavigate()

  // const auth = useAuth()
  const userStore = useUsersStore()

  console.log('AppBar user: ', userStore.get().user)

  const goTo = (
    item: { name: string; href: string; current: boolean },
    index: number
  ) => {
    navigate(item.href)
    const currentIndex = navigation.findIndex((item) => item.current)
    if (currentIndex > -1) navigation[currentIndex].current = false
    item.current = true
    navigation[index] = item
  }

  return (
    <>
      {/* <Alert /> */}
      <Disclosure as="nav" className="bg-white">
        {({ open }) => (
          <>
            <div className="flex w-full px-2 shadow-sm sm:px-6 lg:px-16">
              <div className="max-w-auto flex h-16 w-full flex-grow items-center justify-between">
                {/* <div className="absolute flex inset-y-0 left-0 flex items-center sm:hidden">
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Abrir menu principal</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div> */}
                <div className="flex max-w-max items-center justify-center sm:items-stretch sm:justify-start">
                  <div className="flex flex-shrink-0 items-center justify-center gap-x-3 pr-16">
                    <img
                      className="block w-auto lg:block"
                      src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                      alt="SAV"
                    />
                    <div className="text-1xl flex w-auto items-center justify-center font-semibold text-indigo-500 lg:block">
                      <span>SAV</span>
                    </div>
                  </div>
                  <div className="items-center sm:ml-6 sm:block md:flex">
                    <div className="flex items-center space-x-4">
                      {navigation.map((item, index) => (
                        <NavLink
                          to={item.href}
                          key={item.name}
                          // className={classNames(
                          //   item.current
                          //     ? 'bg-gray-900 text-white'
                          //     : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                          //   'rounded-md px-3 py-2 text-sm font-medium'
                          // )}
                          className={({ isActive }) =>
                            classNames(
                              isActive
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )
                          }
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {/* <a
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-gray-700 hover:bg-gray-700 hover:text-white',
                            'rounded-md px-3 py-2 text-sm font-medium'
                          )}
                          aria-current={item.current ? 'page' : undefined}
                          onClick={() => goTo(item, index)}
                        >
                          {item.name}
                        </a> */}
                          {item.name}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                  <button
                    type="button"
                    className="rounded-full bg-gray-100 p-1 text-gray-400 hover:text-zinc-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                  >
                    <span className="sr-only">Ver notificações</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="relative ml-3">
                    <div>
                      <Menu.Button className="flex rounded-full bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                        <span className="sr-only">Abrir menu de usuário</span>
                        {/* <img
                        className="h-8 w-8 rounded-full"
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        alt=""
                      /> */}
                        <UserCircleIcon
                          className="h-8 w-8 rounded-full border-2 text-gray-400 "
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <Menu.Item>
                          {({ active }) => (
                            <a
                              href="#"
                              className={classNames(
                                active ? 'bg-gray-100' : '',
                                'block px-4 py-2 text-sm text-gray-700'
                              )}
                              onClick={() => userStore.signOut()}
                            >
                              Sair
                            </a>
                          )}
                        </Menu.Item>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            <Disclosure.Panel className="sm:hidden">
              <div className="space-y-1 px-2 pt-2 pb-3">
                {navigation.map((item) => (
                  <Disclosure.Button
                    key={item.name}
                    as="a"
                    href={item.href}
                    className={classNames(
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                      'block rounded-md px-3 py-2 text-base font-medium'
                    )}
                    aria-current={item.current ? 'page' : undefined}
                  >
                    {item.name}
                  </Disclosure.Button>
                ))}
              </div>
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
      <Toaster />
    </>
  )
}

export default AppBar
