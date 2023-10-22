import { Box, Typography } from '@mui/material'
import { PageTitle } from 'components/atoms/PageTitle'
import { Navigation } from 'components/organisms/navigation'
import { TodoItemList } from 'components/organisms/todoItemList'
import { useFetchTodoList } from 'hooks/useFetchTodoList'

type Props = {
  text: string
}

export const ListTemplate = ({ text }: Props) => {
  const { data, error, refetch, isLoading } = useFetchTodoList()
  if (!data && error) {
    return <Typography>表示するデータがありません。</Typography>
  }
  return (
    <Box maxWidth={'450px'}>
      <Navigation />
      <PageTitle text={text} />
      <Box>
        {data && !isLoading && <TodoItemList list={data} refetch={refetch} />}
      </Box>
    </Box>
  )
}
