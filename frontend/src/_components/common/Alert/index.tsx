import { Stack, Typography } from '@mui/material'

type Props = {
  severity: 'success' | 'error'
  text: string
}

export const Alert = ({ severity, text }: Props) => {
  return (
    <Stack
      position={'fixed'}
      right={0}
      top={0}
      alignItems={'center'}
      justifyContent={'center'}
      bgcolor={`${severity === 'success' ? 'bg-blue-500' : 'bg-red-500'}`}
    >
      <Typography color={'white'} fontWeight={'bold'}>
        {text}
      </Typography>
    </Stack>
  )
}
