import { Link } from 'react-router-dom'
import { useAuth } from '../providers/AuthProvider'

export default () => {
  const auth = useAuth()
  console.log('auth', auth)
  return (
    <div className="flex w-screen h-screen">
      <div className="absolute right-5 top-5 pr-10">
        <a
          className="cursor-pointer no-underline hover:underline"
          onClick={() => auth.signOut()}
        >
          Sair
        </a>
      </div>
      <div className="flex w-full h-full place-items-center place-content-center">
        <div className="text-6xl">Home</div>
      </div>
    </div>
  )
}
