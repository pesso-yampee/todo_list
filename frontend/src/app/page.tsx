import { Box,CircularProgress,Stack,Typography } from '@mui/material'
import { AddTodo } from 'components/features/AddTodo'
import { TodoList } from 'components/features/todoList'
import { Metadata } from 'next'
import { Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

export const metadata: Metadata = {
  title: 'Todo List',
}

export default function Page() {
  return (
    <Box maxWidth={'450px'} margin={'0 auto'} width={'100%'}>
      <Typography variant={'h5'} gutterBottom textAlign={'center'}>
        TODOリスト
      </Typography>
      <AddTodo />
      <ErrorBoundary fallback={<h2>Error!!</h2>}>
        <Suspense
          fallback={
            <Box
              display={'grid'}
              minHeight={'300px'}
              sx={{ placeContent: 'center' }}
            >
              <CircularProgress color="inherit" />
            </Box>
          }
        >
          <TodoList />
        </Suspense>
      </ErrorBoundary>
    </Box>
  )
}
