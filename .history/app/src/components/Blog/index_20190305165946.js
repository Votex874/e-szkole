import React, { Component } from 'react'
import styled from 'styled-components'

import HeaderMain from '../HeaderMain/index'
import Footer from '../Footer/index'
import Blog from '../Blog/index'


class Blog extends Component {
  constructor(props){
    super(props)

  }
  render(){
    return ( 
      <React.Fragment>
        <HeaderMain />
        <Blog />
        <Footer />
      </React.Fragment>
    )
  }
}
 
export default Blog