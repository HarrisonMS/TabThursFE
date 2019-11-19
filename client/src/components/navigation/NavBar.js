import React from 'react'
import { Route } from 'react-router-dom'
import FormikSignUp from '../signUp/FormikSignUp'
import FormikLogin from '../login/FormikLogin'
import HomePage from '../homePage/HomePage'
import { EmoNavLink } from './EmoNavigation'
import { FlexContainer } from '../../EmoTools'

const NavBar = () => (
  <nav>
  <FlexContainer width='100%' jcfe>
    <EmoNavLink exact activeStyle={{ fontWeight: 'bold', color: 'black' }} to='/'>
      Sign Up
    </EmoNavLink>
    <EmoNavLink
      activeStyle={{ fontWeight: 'bold', color: 'black' }}
      to='/login'
    >
      Login
    </EmoNavLink>
    <EmoNavLink activeStyle={{ fontWeight: 'bold', color: 'black' }} to='/home'>
      Home
    </EmoNavLink>
    </FlexContainer>
    <Route exact path='/' component={FormikSignUp} />
    <Route path='/login' component={FormikLogin} />
    <Route path='/home' component={HomePage} />
  </nav>
)

export default NavBar
