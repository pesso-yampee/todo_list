'use client'

import { HeaderNavigation } from '@/_components/common/header-navigation'

import { TodoList } from '@/_components/features/todo/list'

import { useAuth } from '@/hooks/use-Auth'
import AppSuspense from '@/_components/common/app-suspense'
import { TodoAddArea } from '@/_components/features/todo/add-area'
import { Box, Container, Typography } from '@mui/material'
import { useLayoutEffect } from 'react'

export default function Page() {
  const { fetchMe } = useAuth()

  // HACK:
  // ログイン時に fetchMe を叩いてるため、結果的に fetchMe を複数回実行していることになる。
  // こういう設計を許していると、リクエスト数が無駄に跳ね上がり、サーバー側が逼迫する原因になりかねないので、
  // もっといいやりかたがないか検討する。
  useLayoutEffect(() => {
    fetchMe()
    // NOTE: 初回レンダリング時にのみ fetchMe を実行したいため、依存配列は空のままにする
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
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
          <AppSuspense>
            <TodoList />
          </AppSuspense>
        </Box>
      </Container>
    </>
  )
}
