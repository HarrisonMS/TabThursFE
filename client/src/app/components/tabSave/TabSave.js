import React from 'react'
import { Form, ErrorMessage } from 'formik'
import { FlexContainer, H1, P, Button } from '../../emotionalThings/EmoTools'
import { EmoField } from '../../emotionalThings/EmoTools'
import SignedInNavBar from '../navigation/SignedInNavBar'

const TabSave = ({ isSubmitting, errors, touched }) => {
  return (
    <>
      <SignedInNavBar />
      <FlexContainer fdc aic acc mainColor m='20px 0'>
        <H1>Save New Tab </H1>
        <Form>
          <FlexContainer m='50px 0 0' fdc aic mainColor>
            {(touched.tabName && errors.tabName && (
              <ErrorMessage name='tabName' component={P} />
            )) || <P>Enter Tab Name</P>}
            <EmoField type='text' name='tabName' />
            {(touched.url && errors.url && (
              <ErrorMessage name='url' component={P} />
            )) || <P>Enter Tab Address</P>}
            <EmoField type='text' name='url' />
            <P>Enter Note</P>
            <EmoField type='text' name='note' />
            <P>Enter Category</P>
            <EmoField type='text' name='category' />
            <Button type='submit' disabled={isSubmitting}>
              Submit
            </Button>
          </FlexContainer>
        </Form>
      </FlexContainer>
    </>
  )
}

export default TabSave
