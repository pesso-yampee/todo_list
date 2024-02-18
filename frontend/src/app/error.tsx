'use client'
import { Box, Typography } from '@mui/material'
import { useEffect } from 'react'
import { Button } from '_components/common/Button'

type ErrorProps = {
  error: Error & { digest?: string }
  reset: () => void
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <Box>
      <Typography variant={'h1'}>Something went wrong!</Typography>
      <Button text={'Try again'} onClick={() => reset()} />
    </Box>
  )
}
