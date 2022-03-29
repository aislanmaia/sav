import { Outlet, Route, Routes } from 'react-router-dom'
import { useAuth } from '../../providers/AuthProvider'

export default () => {
  return (
    <div className="flex h-screen w-screen">
      <div className="flex h-full w-full place-content-center place-items-center">
        <div className="text-6xl"></div>
      </div>
    </div>
  )
}
