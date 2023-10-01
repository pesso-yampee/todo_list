import { Box, CircularProgress, Typography } from '@mui/material'
import { PageTitle } from 'components/atoms/PageTitle'
import { Navigation } from 'components/organisms/navigation'
import { TodoItem } from 'components/organisms/todoItem'
import { useFetchTodo } from 'hooks/useFetchTodo'

type Props = {
  text: string
}

export const ListTemplate = ({ text }: Props) => {
  const { data, error, mutate, isLoading } = useFetchTodo()
  
  if (isLoading) {
    return <CircularProgress />
  }
  return (
    <Box>
      <Navigation />
      <PageTitle text={text} />
      <Box>
      {
        data && !isLoading && (
        <TodoItem list={data} />
        )  
      }
        {
          !data && (
          <Typography>データが存在しません。</Typography>
          )  
        }
      </Box>
    </Box>
  )
}
