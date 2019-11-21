import React, { useContext } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { EditTabContext } from '../contexts/EditTabContext'

const EditPrivateRoute = ({ component: Component, ...rest }) => {
  const { tab } = useContext(EditTabContext)
  return (
  <Route
    {...rest}
    render={props =>
      localStorage.getItem('token') ? (
        <Component {...props} tab={tab} />
      ) : (
        <Redirect to='/' />
      )
    }
  />
)
  }

export default EditPrivateRoute
