import React, { Component } from 'react'
import styled from 'styled-components'

import Avatar from './Avatar/index'
import Content from './Content/index'
import Footer from './Footer/index'
import Title from './Title/index'

const PostContainer = styled.article`

`

const ContentContainer = styled.section`

`

class Post extends Component {
  render() {
    const { content } = this.props
    return (
      <PostContainer>
        <ContentContainer>
          <Title title={content.title} />
          <Content text={content.content} />
          <Footer date={content.date} author={content.author} />
        </ContentContainer>
        <Avatar img={content.imageName} />
      </PostContainer>
    )
  }
}

export default Post