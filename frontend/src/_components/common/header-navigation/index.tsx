'use client'

import { useAuth } from '@/hooks/use-Auth'
import { AppBar, Container, Link, List, ListItem } from '@mui/material'

export const HeaderNavigation = () => {
  const { logout } = useAuth()

  return (
    <AppBar component={'nav'} sx={{ backgroundColor: 'green' }}>
      <Container>
        <List sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <ListItem sx={{ width: 'fit-content' }} disableGutters>
            <Link
              onClick={() => logout()}
              color={'#ffffff'}
              fontWeight={'bold'}
              width={'5em'}
              sx={{ cursor: 'pointer', textDecoration: 'none' }}
            >
              ログアウト
            </Link>
          </ListItem>
        </List>
      </Container>
    </AppBar>
  )
}
