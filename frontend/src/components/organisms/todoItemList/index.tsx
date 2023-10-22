import { List, ListItem, ListItemText } from '@mui/material'
import { DeleteButton } from 'components/molecules/DeleteButton'
import { DetailButton } from 'components/molecules/DetailButton'
import { EditButton } from 'components/molecules/EditButton'
import { TodoType } from 'types/todo'

type Props = {
  list: TodoType[]
  refetch: () => void
}

export const TodoItemList = ({ list, refetch }: Props) => {
  return (
    <List>
      {list.map((item) => (
        <ListItem key={item.id} id={item.id}>
          <ListItemText>{item.title}</ListItemText>
          <DetailButton id={item.id} />
          <EditButton id={item.id} />
          <DeleteButton id={item.id} refetch={refetch} />
        </ListItem>
      ))}
    </List>
  )
}
