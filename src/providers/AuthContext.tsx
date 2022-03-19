import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

export interface AuthContextType {
  user: Record<string, unknown> | null
  signIn: (user: Record<string, unknown>, callback: VoidFunction) => void
  signOut: (callback: VoidFunction) => void
}

let AuthContext = React.createContext<AuthContextType>(null!)

const auth = {
  isAuthenticated: false,
  signIn(callback: VoidFunction) {
    auth.isAuthenticated = true
    setTimeout(callback, 100) // fake async
  },
  signOut(callback: VoidFunction) {
    auth.isAuthenticated = false
    setTimeout(callback, 100)
  },
}

function useAuth() {
  return React.useContext(AuthContext)
}

function RequireAuth({ children }: { children: JSX.Element }) {
  const auth = useAuth()
  const location = useLocation()

  if (!auth.user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

export { auth, useAuth, RequireAuth }
