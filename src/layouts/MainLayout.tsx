import { Outlet } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

const MainLayout = () => {
  return <Outlet />
}

export default MainLayout
