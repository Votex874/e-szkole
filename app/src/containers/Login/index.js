import React, { Component } from 'react'
import HeaderMain from '../../components/HeaderMain/index';
import Footer from '../../components/Footer/index'
import LoginPanel from '../../components/LoginPanel/index'

class Login extends Component{
  render(){
    return(
      <React.Fragment>
        <HeaderMain />
        <LoginPanel />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Login