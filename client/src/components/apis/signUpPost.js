import axios from 'axios'

const signUpPost = values => {
  axios.post('https://reqres.in/api/users', values)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
}

export default signUpPost