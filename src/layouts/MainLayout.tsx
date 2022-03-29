import { Outlet } from 'react-router-dom'
import AppBar from '../app/components/AppBar'

const MainLayout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
    </>
  )
}

export default MainLayout
