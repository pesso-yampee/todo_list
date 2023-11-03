import { PageTitle } from 'components/atoms/PageTitle'
import { useFetchDetailTodo } from 'hooks/useFetchDetailTodo'
import { useRouter } from 'next/router'
import styles from './style.module.css'
import { Box, Stack, Typography } from '@mui/material'

type Props = {
  text: string
}

export function DetailTodoCotents({ text }: Props) {
  const router = useRouter()
  const id = Number(router.query.id) as number
  const { data } = useFetchDetailTodo(id)

  return (
    <Stack justifyContent={'center'} alignItems={'center'} maxWidth={'600px'} mt={'100'}>
      <PageTitle text={text} />
      <Stack width={'100%'} mt={'20px'} pt={'20px'} boxShadow={'0 0 5px #333'} spacing={10}>
        <Typography variant='body1'>{data?.title}</Typography>
        <Typography variant='body1'>{data?.detail}</Typography>
      </Stack>
    </Stack>
  )
}
