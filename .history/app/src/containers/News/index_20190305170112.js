import React, { Component } from 'react'

import HeaderMain from '../../components/HeaderMain/index'
import Footer from '../../components/Footer/index'
import Blog from '../../components/Blog/index'


class News extends Component {
  constructor(props){
    super(props)

  }
  render (){
    return (
      <React.Fragment>
        <HeaderMain />
        <Blog />
        <Footer />
      </React.Fragment>
    )
  }
}

export default News