import { Box, List, ListItem, ListItemText } from '@mui/material'
import { DeleteButton } from 'components/molecules/DeleteButton'
import { DetailButton } from 'components/molecules/DetailButton'
import { EditButton } from 'components/molecules/EditButton'
import { TodoType } from 'types/todo'

type Props = {
  data: TodoType[]
  refetch: () => void
}

export const TodoItemList = ({ data, refetch }: Props) => {
  return (
    <List>
      {data.map((item) => (
        <ListItem key={item.id} id={item.id} disableGutters>
          <ListItemText>{item.title}</ListItemText>
          <Box display={'flex'} gap={'8px'}>
            <DetailButton id={item.id} />
            <EditButton id={item.id} />
            <DeleteButton id={item.id} refetch={refetch} />
          </Box>
        </ListItem>
      ))}
    </List>
  )
}
