import { withFormik } from 'formik'
import * as Yup from 'yup'
import SignUp from './SignUp'
import signUpPost from '../apis/signUpPost'

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
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    signUpPost(values, () => props.history.push('/home'))
    setSubmitting(false)
    resetForm()
  },
  displayName: 'Sign Up',
})(SignUp)

export default FormikSignUp
