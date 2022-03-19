import React from 'react'
import { auth, AuthContextType } from './AuthContext'

let AuthContext = React.createContext<AuthContextType>(null!)

function AuthProvider({ children }: { children: React.ReactNode }) {
  let [user, setUser] = React.useState<Record<string, unknown> | null>(null)

  let signIn = (
    newUser: Record<string, unknown> | null,
    callback: VoidFunction
  ) => {
    return auth.signIn(() => {
      setUser(newUser)
      callback()
    })
  }

  let signOut = (callback: VoidFunction) => {
    return auth.signOut(() => {
      setUser(null)
      callback()
    })
  }

  let value = { user, signIn, signOut }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export default AuthProvider
