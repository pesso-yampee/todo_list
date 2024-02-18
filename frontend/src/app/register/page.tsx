import { Box, Stack, Typography } from '@mui/material'
import { RegisterBody } from '_components/features/Register/Body'

export default function Page() {
  return (
    <Box display={'grid'} height={'100vh'} sx={{ placeItems: 'center' }}>
      <Box
        marginX={'auto'}
        width={'100%'}
        maxWidth={'600px'}
        border={'solid 2px #d0d0d0'}
      >
        <Stack
          alignItems={'center'}
          justifyContent={'center'}
          width={'100%'}
          bgcolor={'#d0d0d0'}
          paddingY={'8px'}
          paddingLeft={'4px'}
        >
          <Typography fontWeight={'bold'}>会員登録</Typography>
        </Stack>
        <RegisterBody />
      </Box>
    </Box>
  )
}
