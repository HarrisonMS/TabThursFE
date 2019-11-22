import { withFormik } from 'formik'
import * as Yup from 'yup'
import TabSave from './TabSave'
import { addNewTab } from '../../apis/AddNewTab'

const FormikTabSave = withFormik({
  mapPropsToValues: () => ({
    name: '',
    url: '',
    notes: '',
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Please give your tab a name!'),
    url: Yup.string().required('Please Enter A URL!'),
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    addNewTab(values, () => props.history.push('/home'))
    setSubmitting(false)
  },
  displayName: 'Save New Tab',
})(TabSave)

export default FormikTabSave
