import axios from 'axios'

const loginPost = values => {
  axios.post('https://reqres.in/api/users', values)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
}

export default loginPost