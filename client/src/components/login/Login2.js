// import axiosWithAuth from "../utils/axiosWithAuth";

// import React, { useState } from 'react';
// import axiosWithAuth from "../utils/axiosWithAuth";
// const Login2 = values => {
// 	axiosWithAuth
// 	.post("/Login", values)
// 	.then((res) => {
// 		localStorage.setItem('token', res.values.payload);
// 		// props.history.push('/private');
// 	})
// 	.catch((err) => console.log(err));
// };

//   export default Login2;


// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		axiosWithAuth()
// 			.post('/login', values)
// 			.then((res) => {
// 				localStorage.setItem('token', res.values.payload);
// 			})
// 			.catch((err) => console.log(err));
// 	};


// function Login2(props) {
// 	const [ data, setData ] = useState({
// 		username : '',
// 		password : '',
// 	});
// 	const handleChange = (e) => {
// 		setData({
// 			...data,
// 			[e.target.name]: e.target.value,
// 		});
// 	};
// 	const handleSubmit = (e) => {
// 		e.preventDefault();
// 		axios
// 			.post('https://reqres.in/api/users', data)
// 			.then((res) => {
// 				localStorage.setItem('token', res.data.payload);
// 				// props.history.push('/private');
// 			})
// 			.catch((err) => console.log(err));
// 	};
// 	return (
// 		<div>
// 			<h1>Bubble App!</h1>
// 			<form onSubmit={handleSubmit}>
// 				<input type='text' name='username' value={data.username} onChange={handleChange} placeholder='Username' />
// 				<input type='password' name='password' value={data.password} onChange={handleChange} placeholder='Password' />
// 				<button>Submit</button>
// 			</form>
// 		</div>
// 	);
// }

// export default Login2;