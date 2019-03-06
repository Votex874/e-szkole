import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Post from './Post/index'

class Blog extends Component {
  constructor(props){
    super(props)

    this.state = {
      postList: []
    }
  }

  componentDidMount = () => {
    const { news } = this.props
    let list = [];
    list = news.map((post, i) => <Post />)
    this.setState({
      postList: list
    })
  }

  render(){
    console.log(this.state.postList[0])
    return ( 
      <React.Fragment>
      {this.state.postList}
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