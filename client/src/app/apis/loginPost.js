import axiosWithAuth from '../utils/axiosWithAuth'

const loginPost = (values, redirect) => {
  axiosWithAuth()
    .post('/auth/login', values)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('id', res.data.id)
      redirect()
    })
    .catch(() =>
      alert(
        'Please check your username and password or click the sign up button to create a new account.'
      )
    )
}
export default loginPost
