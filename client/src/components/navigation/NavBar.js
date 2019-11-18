import React from 'react'
import { Link, Route } from 'react-router-dom'
import FormikSignUp from '../signUp/FormikSignUp'
import FormikLogin from '../login/FormikLogin'

const NavBar = () => (
  <nav>
    <Link to='/'>Sign Up</Link>
    <Link to='/signin'>Sign In</Link>
    <Route exact path='/' component={FormikSignUp} />
    <Route path='/signin' component={FormikLogin} />
  </nav>
)

export default NavBar
