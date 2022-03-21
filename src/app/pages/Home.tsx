import { useAuth } from '../../providers/AuthProvider'

export default () => {
  const auth = useAuth()
  console.log('Home page')
  console.log('auth', auth)
  return (
    <div className="flex h-screen w-screen">
      <div className="absolute right-5 top-5 pr-10">
        <a
          className="cursor-pointer no-underline hover:underline"
          onClick={() => auth.signOut()}
        >
          Sair
        </a>
      </div>
      <div className="flex h-full w-full place-content-center place-items-center">
        <div className="text-6xl">Home</div>
      </div>
    </div>
  )
}
