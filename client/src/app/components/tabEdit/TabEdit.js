import React from 'react'
import { Form, ErrorMessage } from 'formik'
import { FlexContainer, H1, P } from '../../emotionalThings/EmoTools'
import { EmoField } from '../../emotionalThings/EmoTools'
import SignedInNavBar from '../navigation/SignedInNavBar'
import { Save } from './EmoTabEdit'

const TabEdit = ({ isSubmitting, errors, touched }) => {
  return (
    <>
      <SignedInNavBar />
      <FlexContainer fdc aic acc mainColor m='20px 0'>
        <H1>Edit Tab</H1>
        <Form>
          <FlexContainer m='50px 0 0' fdc aic mainColor>
            {(touched.name && errors.name && (
              <ErrorMessage name='name' component={P} />
            )) || <P>Enter Tab Name</P>}
            <EmoField type='text' name='name' />
            {(touched.url && errors.url && (
              <ErrorMessage name='url' component={P} />
            )) || <P>Enter Tab Address</P>}
            <EmoField type='text' name='url' />
            <P>Enter Note</P>
            <EmoField type='text' name='notes' />
            <Save m='10px' type='submit' disabled={isSubmitting}>
              Save
            </Save>
          </FlexContainer>
        </Form>
      </FlexContainer>
    </>
  )
}

export default TabEdit
