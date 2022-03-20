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

export { auth }
