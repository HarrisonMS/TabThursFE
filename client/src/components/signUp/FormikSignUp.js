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
      .required(' is a required field!'),
    username: Yup.string()
      .min(5, 'minimum 5 characters')
      .required(`can't be empty`),
    password: Yup.string()
      .min(8, 'must be at least 8 characters')
      .required(`can't be empty`),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setSubmitting(true)
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },
  displayName: 'Sign Up',
})(SignUp)

export default FormikSignUp
