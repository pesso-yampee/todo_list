import { Button } from '@mui/material'
import { PAGE_PATH } from 'constants/pagePath'
import { useRouter } from 'next/router'

type Props = {
  id: string
}

export const EditButton = ({ id }: Props) => {
  const router = useRouter()

  const handleOnClickEditTodo = () => {
    router.push(`${PAGE_PATH.EDIT}${id}`)
  }

  return (
    <Button
      title="編集"
      color="primary"
      variant="contained"
      onClick={handleOnClickEditTodo}
    >
      編集
    </Button>
  )
}
