import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import { connect } from "react-redux";
import { lightBlue } from '../../../constColors'

import EditPen from '../../../images/icons/edit.png'
import Trash from '../../../images/icons/trash.png'
import ArrowHide from '../../../images/icons/arrow-hide.png'
import ArrowShow from '../../../images/icons/arrow-show.png'

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

const ListOfPosts = styled.ol`
  display: block;
  margin: 0 0 0 30px;
  color: #ABABAB;
`

const ItemOfList = styled.li`
  margin: 10px 0;
  padding-bottom: 5px;
  border-bottom: 1px solid ${lightBlue};
  @media (max-width: 767px){
    width: 90%;
    font-size: 12px;
  }
`

const BoldText = styled.span`
  font-weight: bold;
  color: #ABABAB;
  margin-left: 10px;
`

const PostData = styled.span`
  color: ${lightBlue};
  padding-left: 5px;
`

const SubContainer = styled.div`
  display: flex;
  margin: 7px 0;
`
const Container = styled.div`
  display: flex;
  margin: 7px 0;
  justify-content: space-between;
`

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 2px;
`

const Icon = styled.img`
  margin: 0 5px;
  @media(max-width: 767px){    
    width: 12px;
    height: 12px;
  }
`

const ContentContainer = styled.p`
  margin-left: 5px;
`

class Blog extends Component {
  constructor(props){
    super(props)

    this.state = {
      list: [],
      postsData: []
    }
  }

  componentDidUpdate = () => {
    if(this.state.list.length === 0)
      this.createArrayWithPosts();
  }

  createArrayWithPosts = () => {
    let postsData = this.state.postsData.length === 0 ? [] : this.state.postsData;
    if(this.state.postsData.length === 0){            
      postsData = [...this.props.posts].map(() => {
        return { isContentVisible: false }
        }
      )
    }

    const posts = [...this.props.posts].map((post, i) =>
      <ItemOfList type="I" key={post._id}>
        <Container>
          <SubContainer>              
            <BoldText>Author: </BoldText>
            <PostData>{post.author}</PostData>
          </SubContainer>
          <SubContainer>
            <BoldText>D: </BoldText>
            <PostData>{post.date.slice(0, 10).replace(/-/g, '/')}</PostData>
          </SubContainer>
        </Container>
        <SubContainer>
          <BoldText>Title: </BoldText>
          <PostData>{post.title}</PostData>
        </SubContainer>
        <SubContainer>
          <BoldText>Content:</BoldText>
          <ContentContainer>{post.content.slice(0, 30)}...</ContentContainer>
        </SubContainer>
        <IconContainer>
          <Icon src={EditPen}></Icon>
          <Icon src={Trash}></Icon>
          <Icon src={postsData[i].isContentVisible ? ArrowHide : ArrowShow} onClick={() => this.handleToggleContent(i)}></Icon>
        </IconContainer>        
      </ItemOfList>
    )
    this.setState({
      list: posts,
      postsData
    })
  }

  handleToggleContent = id => {
    const { postsData } = this.state
    let arrayPostData = [...postsData]
    arrayPostData[id].isContentVisible = !arrayPostData[id].isContentVisible
    
    this.setState({
      postsData: arrayPostData
    })
    this.createArrayWithPosts();
  }

  render(){
    const { list } = this.state
    console.log(this.state.postsData)
    return (
      <Fragment>
        <Title>wpisy: </Title>
        <ListOfPosts>
          {list}
        </ListOfPosts>
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.list
})

export default connect(mapStateToProps , {})(Blog)