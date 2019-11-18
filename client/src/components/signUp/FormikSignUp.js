import { withFormik } from 'formik'
import * as Yup from 'yup'
import SignUp from './SignUp'

const FormikSignUp = withFormik({
  mapPropsToValues: () => ({
    email: '',
    username: '',
    password: '',
    passwordConfirm: '',
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string()
      .email(`must be formated correctly: example@domain.com`)
      .required('A valid email is required!'),
    username: Yup.string()
      .min(5, 'minimum 5 characters')
      .required(`Username is required!`),
    password: Yup.string()
      .min(8, 'must be at least 8 characters')
      .required(`Password is required!`),
    passwordConfirm: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Passwords must match! Please try again.')
  }),
  handleSubmit: (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
      resetForm()
    }, 1000)
  },
  displayName: 'Sign Up',
})(SignUp)

export default FormikSignUp
