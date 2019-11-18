import { withFormik } from 'formik'
import * as Yup from 'yup'
import Login from './Login'

const FormikLogin = withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: '',
  }),
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(5, 'minimum 5 characters')
      .required(`can't be empty`),
    password: Yup.string()
      .min(8, 'must be at least 8 characters')
      .required(`can't be empty`),
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      setSubmitting(false)
    }, 1000)
  },
  displayName: 'Sign In',
})(Login)

export default FormikLogin
