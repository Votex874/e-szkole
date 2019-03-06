import React, { Component } from 'react'
import styled from 'styled-components'

import Avatar from './Avatar/index'
import Content from './Content/index'
import Footer from './Footer/index'
import Title from './Title/index'

const PostContainer = styled.article`
  display: flex;
  margin: 20px auto;
  border-bottom: 1px solid #ccc;
  padding-bottom: 10px;
  flex-direction: row-reverse;
  @media (max-width: 767px){ 
    flex-direction: column-reverse;
    max-width: 300px;
  }  
  @media (min-width: 768px) and (max-width: 1400px){
    max-width: 600px;
  }
`

const ContentContainer = styled.section`

  @media (min-width: 768px) and (max-width: 1400px){
    width: 60%;
  }
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