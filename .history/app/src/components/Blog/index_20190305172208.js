import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Post from 'react'

class Blog extends Component {
  constructor(props){
    super(props)
  }
  render(){
    console.log(this.props.news)
    const { news } = this.props
    return ( 
      <React.Fragment>
        {news.map((e, i) => (
          <Post />
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