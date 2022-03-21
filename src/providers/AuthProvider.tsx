import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import UserEntity from '../domain/entities/UserEntity'
import { Result } from '../utilities/Result'
import { auth } from './AuthContext'

export interface AuthContextType {
  user: { email: string; password: string } | null
  signIn: (
    user: { email: string; password: string },
    callback: VoidFunction
  ) => void
  signOut: (callback?: VoidFunction) => void
}

let AuthContext = React.createContext<AuthContextType>(undefined!)

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<
    | {
        email: string
        password?: string
        name?: string
      }
    | undefined
  >(undefined)

  let signIn = async (
    newUser: { email: string; password: string } | null,
    callback?: VoidFunction
  ) => {
    if (newUser) {
      console.log('newUser', newUser)
      return await auth.signIn(newUser, (result: Result<UserEntity>) => {
        console.log('aqui')
        if (result.isSuccess) {
          const user = result.getValue()
          if (user) setUser({ email: user.email, name: user.name })
        }
        callback && callback()
      })
    }
  }

  let signOut = (callback?: VoidFunction) => {
    return auth.signOut(() => {
      setUser(null)
      callback && callback()
    })
  }

  let value = { user, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export const useAuth = () => {
  return React.useContext(AuthContext)
}

export function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth()
  const location = useLocation()
  console.log('auth', auth)
  if (!auth || !auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default AuthProvider
