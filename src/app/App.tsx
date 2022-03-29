import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import AuthProvider, { RequireAuth } from '../providers/AuthProvider'
import Clients from './pages/Clients'
import Employees from './pages/Employees'
import LoginPage from './pages/Login'
import Schedules from './pages/Schedules'

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
                  <Route path="/agendamentos" element={<Schedules />} />
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
