import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Post from './Post/index'

class Blog extends Component {
  constructor(props){
    super(props)

  }

  render(){
    const { news } = this.props
    return ( 
      <React.Fragment>
      {news.map((post, i) => (
        <Post key={i} content={post} />
      ))}
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ news }) => {
  return {
    news
  }
}
 
export default connect(mapStateToProps)(Blog)