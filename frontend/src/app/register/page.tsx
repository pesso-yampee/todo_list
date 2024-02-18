import { RegisterBody } from '_components/features/Register/Body'
import { RegisterHeader } from '_components/features/Register/Header'

export default function Page() {
  return (
    <div className='grid h-screen place-items-center'>
      <div className='m-auto w-full max-w-[600px] border-2 border-solid border-gray-300'>
        <RegisterHeader />
        <RegisterBody />
      </div>
    </div>
  )
}
