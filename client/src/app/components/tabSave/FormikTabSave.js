import { withFormik } from 'formik'
import * as Yup from 'yup'
import TabSave from './TabSave'

const FormikTabSave = withFormik({
  mapPropsToValues: () => ({
    tabName: '',
    url: '',
    note: '',
    category: '',
  }),
  validationSchema: Yup.object().shape({
    tabName: Yup.string().required('Please give your tab a name!'),
    url: Yup.string().required('Please Enter A URL!'),
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    values.category === '' && (values.category = 'uncategorised')
    console.log(values)
    setSubmitting(false)
    resetForm()
  },
  displayName: 'Save New Tab',
})(TabSave)

export default FormikTabSave
