import React from 'react'
import { Route } from 'react-router-dom'
import FormikSignUp from '../signUp/FormikSignUp'
import FormikLogin from '../login/FormikLogin'
import HomePage from '../homePage/HomePage'
import { EmoNavLink } from './EmoNavigation'

const NavBar = () => (
  <nav>
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
    <Route exact path='/' component={FormikSignUp} />
    <Route path='/login' component={FormikLogin} />
    <Route path='/home' component={HomePage} />
  </nav>
)

export default NavBar
