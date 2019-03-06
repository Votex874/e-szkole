import React, { Component } from 'react'
import styled from 'styled-components'

import Avatar from './Avatar/index'
import Content from './Content/index'
import Footer from './Footer/index'
import Title from './Title/index'

const PostContainer = styled.article`

`

class Post extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { content } = this.props
    console.log(content)
    return (
      <PostContainer>
      
      </PostContainer>
    )
  }
}

export default Post