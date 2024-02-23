import { ReactNode, Suspense } from 'react'
import { Loading } from '../loading'

type Props = {
  children: ReactNode
}

export default function AppSuspense({ children }: Props) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}
