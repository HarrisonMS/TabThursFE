import { withFormik } from 'formik'
import * as Yup from 'yup'
import { editTab } from '../../apis/EditTab'
import TabEdit from './TabEdit'

const FormikTabEdit = withFormik({
  mapPropsToValues: props => ({
    name: props.tab.name,
    url: props.tab.url,
    notes: props.tab.notes,
    id: props.tab.id,
  }),
  validationSchema: Yup.object().shape({
    name: Yup.string().required('Please give your tab a name!'),
    url: Yup.string().required('Please Enter A URL!'),
  }),
  handleSubmit: (values, { props, setSubmitting, resetForm }) => {
    // values.category === '' && (values.category = 'School')
    editTab(values, () => props.history.push('/home'))
    setSubmitting(false)
    resetForm()
  },
  displayName: 'Edit Tab',
})(TabEdit)

export default FormikTabEdit
