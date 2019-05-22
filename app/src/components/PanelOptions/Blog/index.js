import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import { connect } from "react-redux";
import { lightBlue } from '../../../constColors'

const Title = styled.h2`
  text-transform: uppercase;
  margin: 20px auto;
  text-align: center;
  text-decoration: underline;
  font-weight: bold;
  color: #5E5E5E;
  @media (max-width: 767px){
    font-size: 18px;
  }
`

const ListOfPosts = styled.ul`
  margin-left: 15px;
`

const ItemOfList = styled.li`
`

const NumberOfPost = styled.span`
`

class Blog extends Component {
  constructor(props){
    super(props)
  }

  render(){
    console.log(this.props)
    const { posts } = this.props
    return (
      <Fragment>
        <Title>wpisy: </Title>
        <ListOfPosts>
          {posts.map( (post, i) => 
            <ItemOfList key={post._id}>
              <NumberOfPost>{i + 1}. </NumberOfPost>
              {post.author}
            </ItemOfList>
          )}
        </ListOfPosts>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.list
})

export default connect(mapStateToProps , {})(Blog)