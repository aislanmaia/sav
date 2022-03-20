import { useAuth } from '../providers/AuthProvider'

export default () => {
  console.log('Home page')
  const auth = useAuth()
  console.log('auth', auth)
  return (
    <div className="flex w-screen h-screen">
      <div className="flex w-full h-full place-items-center place-content-center">
        <div className="text-6xl">Home</div>
      </div>
    </div>
  )
}
