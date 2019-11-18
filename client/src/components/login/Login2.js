import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {login} from './actions/index';


const Login = props => {
  const {id} = props
  useEffect(() => {
    if(id){
      props.history.push('/tabs')
    }
  },[id])
  const [logini, setLogini] = useState({ username: "", password: "" });
  const changeHandler = event => {
    event.preventDefault();
    setLogini({
      ...logini,
      [event.target.name]: event.target.value
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.login(logini);
  };
  return (
    <>
    </>
  );
};


const mapStateToProps = (state) => {
  return {...state}
}

export default connect(mapStateToProps, {login})(Login);
