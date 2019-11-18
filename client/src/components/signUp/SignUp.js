import React from 'react'
import { Form, Field, ErrorMessage } from 'formik'

const SignUp = ({ isSubmitting }) => {
  console.log(isSubmitting)
  return (
  <>
    <h1>Sign Up</h1>
    <Form>
      <Field type='email' name='email' />
      <ErrorMessage name='email' component='p' />
      <Field type='username' name='username' />
      <ErrorMessage name='username' component='p' />
      <Field type='password' name='password' />
      <ErrorMessage name='password' component='p' />
      <Field type='password' name='passwordConfirm' />
      <ErrorMessage name='passwordConfirm' component='p' />
      <button type='submit' disabled={isSubmitting}>
        Submit
      </button>
    </Form>
  </>
)}

export default SignUp
