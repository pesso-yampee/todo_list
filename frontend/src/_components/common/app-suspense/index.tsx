import { Loading } from '@/_components/common/loading'
import { ReactNode, Suspense } from 'react'

type Props = {
  children: ReactNode
}

export default function AppSuspense({ children }: Props) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>
}
