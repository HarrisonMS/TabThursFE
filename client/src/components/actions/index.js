import axiosWithAuth from "../utils/axiosWithAuth";
import axios from 'axios';

export const LOGIN_START = 'LOGIN_START';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';

export const SIGNUP_START = 'SIGNUP_START';
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS';
export const SIGNUP_FAIL = 'SIGNUP_FAIL';

export const login = (credentials) => dispatch => {
  dispatch({type: LOGIN_START});
  const baseURl = "https://tabless-be.herokuapp.com/api/auth"
  axios
  .post(`${baseURL}/SIGNUP`, credentials)
  .then(res => {
    console.log("login", res);
    localStorage.setItem("token", res.data.token);
    localStorage.setItem("user", res.data.id)
    dispatch({type: LOGIN_SUCCESS, payload: res.data.id})
  })
  .catch(err => {
    dispatch({type: LOGIN_FAIL, payload: err})
    console.log("ERROR IN HANDLE LOGIN", err.res);
  });
}

export const SIGNUP = (credentials) => dispatch => {
  dispatch({type: SIGNUP_START});
    const baseURL = "https://tabless-be.herokuapp.com/api/auth";
    axios
      .post(`${baseURL}/SIGNUP`, credentials)
      .then(res => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        localStorage.setItem('user', res.data.id)
        dispatch({type: SIGNUP_SUCCESS , payload: res.data.id})
      })
      .catch(err => {
        dispatch({type: SIGNUP_FAIL, payload: err})
        console.log(err);
      });
}