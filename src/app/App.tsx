import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import Home from './pages/Home'
import LoginPage from './pages/Login'
import SignUp from './pages/Signup'
import AuthProvider, { RequireAuth } from '../providers/AuthProvider'
import Clients from './pages/Clients'
import Employees from './pages/Employees'

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route
            path="/*"
            element={
              <RequireAuth>
                <Routes>
                  <Route path="/clientes" element={<Clients />} />
                  <Route path="/funcionarios" element={<Employees />} />
                  <Route path="/agendamentos" element={<h2>Agendamentos</h2>} />
                </Routes>
              </RequireAuth>
            }
          />
        </Route>

        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </AuthProvider>
  )
}

export default App
