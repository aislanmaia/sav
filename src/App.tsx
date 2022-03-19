import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import LoginPage from './pages/Login'
import { RequireAuth } from './providers/AuthContext'
import AuthProvider from './providers/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<h1>Signup Page</h1>} />
        <Route element={<MainLayout />}>
          <Route
            path="/"
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
        </Route>
      </Routes>
    </AuthProvider>
  )
}

export default App
