import axiosWithAuth from '../utils/axiosWithAuth'

const loginPost = (values, redirect) => {
  axiosWithAuth()
    .post('/auth/login', values)
    .then(res => {
      localStorage.setItem('token', res.data.token)
      redirect()
    })
    .catch(err => console.log(err))
}
export default loginPost
