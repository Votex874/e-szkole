import React, { Component } from 'react'
import styled from 'styled-components'

import Avatar from './Avatar/index'
import Content from './Content/index'
import Footer from './Footer/index'
import Title from './Title/index'

const PostContainer = styled.article`
  display: flex;
  margin: 60px auto;
  border-bottom: 1px solid #ccc;
  padding-bottom: 20px;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  max-width: 850px;
  @media (max-width: 767px){ 
    flex-direction: column-reverse;
    max-width: 300px;
    margin: 20px auto;
    padding-bottom: 10px;
  }  
  @media (min-width: 768px) and (max-width: 1400px){
    max-width: 600px;
    margin: 20px auto;
    padding-bottom: 10px;
  }
`

const ContentContainer = styled.section`
  width: 60%;
  @media (max-width: 767px){
    width: auto;
  }
`

class Post extends Component {
  render() {
    const { content } = this.props
    console.log(content)
    return (
      <PostContainer>
        <ContentContainer>
          <Title title={content.title} />
          <Content text={content.content} />
          <Footer date={content.date} author={content.author} />
        </ContentContainer>
        <Avatar img='news01' />
      </PostContainer>
    )
  }
}

export default Post