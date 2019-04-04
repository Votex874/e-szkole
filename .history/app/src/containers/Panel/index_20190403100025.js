import React, { Component } from 'react'
import styled from 'styled-components'

import HeaderMain from '../../components/HeaderMain/index'
import Footer from '../../components/Footer/index'
import PanelManagement from '../../components/PanelManagement/index'

class Panel extends Component{
  render(){
    return (
      <React.Fragment>
        <HeaderMain />
        
        <Footer />
      </React.Fragment>
    )
  }
}

export default Panel