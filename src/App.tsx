import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Home from './pages/Home'
import LoginPage from './pages/Login'
import AuthProvider, { RequireAuth } from './providers/AuthProvider'

function App() {
  return (
    <AuthProvider>
      <Routes>
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

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<h1>Signup Page</h1>} />
      </Routes>
    </AuthProvider>
  )
}

export default App
