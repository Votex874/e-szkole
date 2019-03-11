import React, { Component } from 'react'

import HeaderMain from '../../components/HeaderMain/index';
import Footer from '../../components/Footer/index'
import Form from '../../components/Form/index'

class Contact extends Component {
  render(){
    return (
      <React.Fragment>
        <Form />
        <Footer />
      </React.Fragment>
    )
  }
}

export default Contact