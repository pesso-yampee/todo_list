import { Box, Typography } from '@mui/material'
import { LoginBody } from '_components/features/Login/Body'

export default function Page() {
  return (
    <Box
      paddingX={'4px'}
      height={'100vh'}
      sx={{ display: 'grid', placeItems: 'center' }}
    >
      <Box
        border={'solid 2px #d0d0d0'}
        maxWidth={'600px'}
        width={'100%'}
        height={'fit-content'}
        marginInline={'auto'}
      >
        <Box bgcolor={'#d0d0d0'} paddingY={'4px'}>
          <Typography
            display={'block'}
            textAlign={'center'}
            fontWeight={'bold'}
            fontSize={'16px'}
          >
            ログイン
          </Typography>
        </Box>
        <LoginBody />
      </Box>
    </Box>
  )
}
