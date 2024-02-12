import { LoginBody } from '_components/features/Login/Body'
import { LoginHeader } from '_components/features/Login/Header'

export default function Page() {
  return (
    <div className="grid h-screen place-items-center px-4">
      <div className="m-auto w-full max-w-[600px] border-2 border-solid border-gray-300">
        <LoginHeader />
        <LoginBody />
      </div>
    </div>
  )
}
