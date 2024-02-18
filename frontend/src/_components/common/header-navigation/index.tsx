'use client'

import { AppBar, Container, Link, List, ListItem } from '@mui/material'
import { useHeaderNavigation } from './fetchers/use-header-navigation'

export const HeaderNavigation = () => {
  const { isAuthenticated, onClickLogin, onClickLogout, onClickRegister } =
    useHeaderNavigation()
  const navigationList = [
    { name: 'ログイン', event: onClickLogin },
    { name: '新規登録', event: onClickRegister },
    { name: 'ログアウト', event: onClickLogout },
  ]

  return (
    <AppBar component={'nav'} sx={{ backgroundColor: 'green' }}>
      <Container>
        <List sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          {navigationList.map((item, index) => {
            if (isAuthenticated && index < 2) {
              return (
                <ListItem
                  key={index}
                  sx={{ display: 'none', width: 'fit-content' }}
                  disableGutters
                >
                  <Link
                    onClick={item.event}
                    color={'#ffffff'}
                    fontWeight={'bold'}
                    width={'5em'}
                    sx={{ cursor: 'pointer', textDecoration: 'none' }}
                  >
                    {item.name}
                  </Link>
                </ListItem>
              )
            } else {
              return (
                <ListItem
                  key={index}
                  sx={{ width: 'fit-content' }}
                  disableGutters
                >
                  <Link
                    onClick={item.event}
                    color={'#ffffff'}
                    fontWeight={'bold'}
                    width={'5em'}
                    sx={{ cursor: 'pointer', textDecoration: 'none' }}
                  >
                    {item.name}
                  </Link>
                </ListItem>
              )
            }
          })}
        </List>
      </Container>
    </AppBar>
  )
}
