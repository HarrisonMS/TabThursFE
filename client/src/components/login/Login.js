import React from 'react'
import { Form, Field, ErrorMessage } from 'formik'

const Login = ({ isSubmitting }) => (
  <>
    <h1>Login</h1>
    <Form>
      <Field type='username' name='username' />
      <ErrorMessage name='username' component='p' />
      <Field type='password' name='password' />
      <ErrorMessage name='password' component='p' />
      <button type='submit' disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  </>
)

export default Login
