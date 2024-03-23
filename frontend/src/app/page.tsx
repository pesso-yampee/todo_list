import { HeaderNavigation } from '@/_components/common/header-navigation'

import { TodoList } from '@/_components/features/todo/list'

import AppSuspense from '@/_components/common/app-suspense'
import { TodoAddArea } from '@/_components/features/todo/add-area'
import { Box, Container, Typography } from '@mui/material'

export default function Page() {
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
