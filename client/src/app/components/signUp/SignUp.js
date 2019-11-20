import React from 'react'
import { Form, ErrorMessage } from 'formik'
import { FlexContainer, H1, P, Button } from '../../emotionalThings/EmoTools'
import { EmoField } from '../../emotionalThings/EmoTools'
import NavBar from '../navigation/NavBar'

const SignUp = ({ isSubmitting, errors, touched }) => {
  return (
    <>
      <NavBar />
      <FlexContainer fdc aic acc mainColor margin='20px 0'>
        <H1>Sign Up</H1>
        <Form>
          <FlexContainer margin='50px 0 0' fdc aic mainColor>
            {(touched.email && errors.email && (
              <ErrorMessage name='email' component={P} />
            )) || <P>Enter Email</P>}
            <EmoField type='email' name='email' />
            {(touched.username && errors.username && (
              <ErrorMessage name='username' component={P} />
            )) || <P>Enter Username</P>}
            <EmoField type='username' name='username' />
            {(touched.password && errors.password && (
              <ErrorMessage name='password' component={P} />
            )) || <P>Enter Password</P>}
            <EmoField type='password' name='password' />
            {(touched.passwordConfirm && errors.passwordConfirm && (
              <ErrorMessage name='passwordConfirm' component={P} />
            )) || <P>Confirm Password</P>}
            <EmoField type='password' name='passwordConfirm' />
            <Button type='submit' disabled={isSubmitting}>
              Submit
            </Button>
          </FlexContainer>
        </Form>
      </FlexContainer>
    </>
  )
}

export default SignUp
