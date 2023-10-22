import { Button } from '@mui/material'
import { PAGE_PATH } from 'constants/pagePath'
import { useRouter } from 'next/router'

type Props = {
  id: string
}

export const DetailButton = ({ id }: Props) => {
  const router = useRouter()
  const handleOnClickConfirmTodo = () => {
    router.push(`${PAGE_PATH.DETAIL}${id}`)
  }

  return (
    <Button
      title="詳細"
      color="info"
      variant="contained"
      onClick={handleOnClickConfirmTodo}
    >
      詳細
    </Button>
  )
}
