import axiosWithAuth from "../utils/axiosWithAuth"
import axios from "axios"

// const signUpPost = values => {
//   axios.post('https://reqres.in/api/users', values)
//   .then(res => {
//     // console.log(res)
//   })
//   .catch(err => {
//     console.log(err)
//   })
// }

const signUpPost = values => {
  axiosWithAuth()
    .post('/auth/register', values)
    .then((res) => {
      localStorage.setItem('token', res.data.token);
      props.history.push("/home")
    })
    .catch((err) => console.log(err));
  };

export default signUpPost