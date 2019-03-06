import React, { Component } from 'react'

import HeaderMain from '../HeaderMain/index'
import Footer from '../Footer/index'
import Blog from '../Blog/index'


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