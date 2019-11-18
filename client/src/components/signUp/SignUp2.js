import React, { useState,useEffect } from "react";
import {connect} from 'react-redux';
import {signUp} from './actions/index';



function SignUp(props) {
  const [loginz, setLoginZ] = useState({username: '', password: '' });
  const {id} = props
  useEffect(() => {
    if(id){
      props.history.push('/tabs')
    }
  },[id])

  const handleSubmit = e => {
    e.preventDefault();
    props.signUp(loginz)

  };

  return (
    <>
    </>
  );
}


const mapStateToProps = (state) => {
  return {...state}
}
export default connect(mapStateToProps, {signUp})(SignUp);