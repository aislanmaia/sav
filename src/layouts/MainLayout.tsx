import { Outlet } from 'react-router-dom'
import AppBar from '../app/components/AppBar'
import { useAuth } from '../providers/AuthProvider'

const MainLayout = () => {
  const auth = useAuth()
  console.log('Main layout user: ', auth.user)
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  )
}

export default MainLayout
