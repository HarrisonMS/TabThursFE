import axios from 'axios'
import axiosWithAuth from "../utils/axiosWithAuth"

// const loginPost = values => {
//   axios.post('https://reqres.in/api/users', values)
//   .then(res => {
//     console.log(res)
//   })
//   .catch(err => {
//     console.log(err)
//   })
// }

const loginPost = values => {
  axiosWithAuth()
    .post('/auth/login', values)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
    })
    .catch((err) => console.log(err));
  };
export default loginPost;