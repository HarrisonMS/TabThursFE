import React from 'react'
import { EmoNavLink } from './EmoNavigation'
import { FlexContainer } from '../../emotionalThings/EmoTools'

const NavBar = () => (
  <nav>
    <FlexContainer width='100%' jcfe>
      <EmoNavLink
        exact
        activeStyle={{ fontWeight: 'bold', color: 'black' }}
        to='/'
      >
        Sign Up
      </EmoNavLink>
      <EmoNavLink
        activeStyle={{ fontWeight: 'bold', color: 'black' }}
        to='/login'
      >
        Login
      </EmoNavLink>
    </FlexContainer>
  </nav>
)

export default NavBar
