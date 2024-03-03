'use client'

import { HeaderNavigation } from '@/_components/common/header-navigation'

import { TodoList } from '@/_components/features/todo/list'
import { useAtomValue } from 'jotai'

import { useAuth } from '@/hooks/useAuth'
import { todoEditModalAtom } from '@/store'
import { SanctumGuard } from '@/_components/common/sanctum-guard'
import { TodoAddArea } from '@/_components/features/todo/add-area'
import { TodoEditModal } from '@/_components/features/todo/edit-modal'
import { Box,Container,Typography } from '@mui/material'
import dynamic from 'next/dynamic'
import { useEffect } from 'react'

/**
 * NOTE:
 * dynamic import を活用することで非同期にモジュールを読み込むことができる。（返り値はPromise）
 * オプションに {ssr: false} を指定することで、クライアントサイドでレンダリングすることを可能とする。
 * ページ読み込み時に必要なJSファイルを削減できるため、ページ表示速度改善にもつながる。
 */
const DynamicAppSuspense = dynamic(
  () => import('../_components/common/app-suspense'),
  { ssr: false }
)

export default function Page() {
  const { fetchMe } = useAuth()
  const todoEditModalState = useAtomValue(todoEditModalAtom)

  // HACK:
  // ログイン時に fetchMe を叩いてるため、結果的に fetchMe を複数回実行していることになる。
  // こういう設計を許していると、リクエスト数が無駄に跳ね上がり、サーバー側が逼迫する原因になりかねないので、
  // もっといいやりかたがないか検討する。
  useEffect(() => {
    fetchMe()
    // NOTE: 初回レンダリング時にのみ fetchMe を実行したいため、依存配列は空のままにする
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <SanctumGuard>
      <Container sx={{ marginTop: '56px', paddingTop: '20px' }}>
        <HeaderNavigation />
        <Box>
          <Typography
            variant={'h1'}
            gutterBottom={false}
            textAlign={'center'}
            fontSize={'24px'}
            fontWeight={'bold'}
          >
            TODOリスト
          </Typography>
          <TodoAddArea />
          <DynamicAppSuspense>
            <TodoList />
          </DynamicAppSuspense>
        </Box>
      </Container>
      {todoEditModalState.isOpen && (
        <TodoEditModal isOpen={todoEditModalState.isOpen} />
      )}
    </SanctumGuard>
  )
}
