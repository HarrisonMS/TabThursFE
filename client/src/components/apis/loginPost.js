import axiosWithAuth from '../utils/axiosWithAuth'

const loginPost = (values, redirect) => {
  axiosWithAuth()
    .post('/auth/login', values)
    .then(res => {
      localStorage.setItem('token', res.data.token)
    })
    .catch(err => console.log(err))
    .finally(redirect())
}
export default loginPost
