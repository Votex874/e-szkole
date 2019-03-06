import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Post from 'react'

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
    list = news.map((post, i) => {
      return <Post key={i} content={post.data} />
    })
    this.setState({
      postList: list
    })
  }

  render(){
    console.log(this.props.news)
    const { news } = this.props
    console.log(this.state.postList)
    return ( 
      <React.Fragment>
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