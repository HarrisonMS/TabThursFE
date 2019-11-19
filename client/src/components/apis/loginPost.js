import axios from 'axios'

const axiosWithAuth = () => {
  const token = localStorage.getItem('token')
  return axios.create({
    baseURL: 'https://tabless-be.herokuapp.com/api/',
    headers: {
      Authorization: token,
    },
  })
}

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
