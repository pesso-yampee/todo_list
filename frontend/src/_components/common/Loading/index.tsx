import { Box, CircularProgress } from '@mui/material'

export const Loading = () => {
  return (
    <Box display={'grid'} minHeight={'300px'} sx={{ placeItems: 'center' }}>
      <CircularProgress color={'inherit'} />
    </Box>
  )
}
