import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { auth } from './AuthContext'

export interface AuthContextType {
  user: Record<string, unknown> | null
  signIn: (user: Record<string, unknown>, callback: VoidFunction) => void
  signOut: (callback?: VoidFunction) => void
}

let AuthContext = React.createContext<AuthContextType>(null!)

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<Record<string, unknown> | null>(null)

  let signIn = (
    newUser: Record<string, unknown> | null,
    callback?: VoidFunction
  ) => {
    return auth.signIn(() => {
      setUser(newUser)
      callback && callback()
    })
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

  if (!auth || !auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export default AuthProvider
