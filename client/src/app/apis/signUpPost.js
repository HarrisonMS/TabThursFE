import axiosWithAuth from '../utils/axiosWithAuth'

const signUpPost = (values, redirect) => {
  axiosWithAuth()
    .post('/auth/register', values)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('id', res.data.id)
      redirect()
    })
    .catch(() =>
      alert(
        'Please check the information and try again, or log in to an existing account.'
      )
    )
}
export default signUpPost
