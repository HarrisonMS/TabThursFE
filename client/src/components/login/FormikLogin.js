import { withFormik } from 'formik'
import * as Yup from 'yup'
import Login from './Login'
import loginPost from '../apis/loginPost'

const FormikLogin = withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: '',
  }),
  validationSchema: Yup.object().shape({
    username: Yup.string()
      .min(5, 'minimum 5 characters')
      .required(`Username is required!`),
    password: Yup.string()
      .min(8, 'must be at least 8 characters')
      .required(`Password is required!`),
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    loginPost(values, () => props.history.push('/home'))
    setSubmitting(false)
    resetForm()
  },
  displayName: 'Sign In',
})(Login)

export default FormikLogin
