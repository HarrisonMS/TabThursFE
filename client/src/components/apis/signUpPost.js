import axiosWithAuth from '../utils/axiosWithAuth'

const signUpPost = (values, redirect) => {
  axiosWithAuth()
    .post('/auth/register', values)
    .then(res => {
      localStorage.setItem('token', res.data.token)
    })
    .catch(err => console.log(err))
    .finally(redirect())
}
export default signUpPost
