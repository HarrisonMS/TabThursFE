import { withFormik } from 'formik'
import * as Yup from 'yup'
import TabSave from './TabSave'
import { addNewTab } from '../../apis/AddNewTab'

const FormikTabSave = withFormik({
  mapPropsToValues: () => ({
    name: '',
    url: '',
    notes: '',
    // category: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Please give your tab a name!'),
    url: Yup.string().required('Please Enter A URL!'),
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    // values.category === '' && (values.category = 'School')
    addNewTab(values)
    console.log(values)
    setSubmitting(false)
  },
  displayName: 'Save New Tab',
})(TabSave)

export default FormikTabSave
