import React, { Component, Fragment } from 'react'
import styled from 'styled-components'

import { connect } from "react-redux";
import { lightBlue } from '../../../constColors'
import { fetchPosts, deletePost } from '../../../reducers/actions/postsActions'

import Title from '../TitlePanel/index'
import Pagination from '../Pagination/index'
import EditPen from '../../../images/icons/edit.png'
import Trash from '../../../images/icons/trash.png'
import ArrowHide from '../../../images/icons/arrow-hide.png'
import ArrowShow from '../../../images/icons/arrow-show.png'

const ListOfPosts = styled.ol`
  display: block;
  margin: 0 0 0 30px;
  color: #ABABAB;
  @media (max-width: 767px){
    margin: 0;
  }
`

const ItemOfList = styled.li`
  margin: 10px auto;
  padding-bottom: 5px;
  border-bottom: 1px solid ${lightBlue};
  font-size: 18px;
  width: 80%;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
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

const Container = styled.div`
  display: flex;
  margin: 7px 0;
  justify-content: space-between;
  word-wrap: break-word;
  ${props => props.sub ? {
    justifyContent: 'flex-start',
  } : ''}
  ${props => props.fake ? {
    display: 'block',
    width: '100%',
    marginLeft: 'auto'
  } : ''}
`

const IconContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 2px;
`

const ShowNumber = styled.span`
  color: #ABABAB;
  width: 30px;
  margin: 20px 0;
`

const Icon = styled.img`
  margin: 0 5px;
  cursor: pointer;
  width: 22px;
  height: 22px;
  @media(max-width: 767px){    
    width: 14px;
    height: 14px;
  }
`

const ContentContainer = styled.p`
  margin-left: 5px;
  max-width: 540px;
  word-wrap: break-word;
  @media (min-width: 768px) and (max-width: 1399px){
    max-width: 700px;
  }
  @media (max-width: 767px){
    max-width: 120px;
  }
`

class Blog extends Component {
  constructor(props){
    super(props)

    this.state = {
      list: [],
      postsData: [],
      page: 1
    }
  }

  componentDidMount = () => {
    this.props.fetchPosts();
  }

  componentDidUpdate = (prevProps) => {
    if(this.props.posts !== prevProps.posts){
      this.createArrayWithPosts();
    }
     
    if(this.state.list.length === 0)
      this.createArrayWithPosts();
  }

  createArrayWithPosts = (p = 1) => {
    const visiblePosts = this.visiblePosts(p);
    
    let postsData = this.state.postsData.length === 0 ? [] : this.state.postsData;
    if(this.state.postsData.length === 0){            
      postsData = [...this.props.posts].map(() => {
        return { isContentVisible: false }
        }
      )
    }

    const showContent = { height: 'auto', opacity: '1', visibility: 'visible' }
    const hideContent = { height: '0', opacity: '0', visibility: 'hidden' }

    const posts = [...this.props.posts].map((post, i) => {
      const currentItem = postsData[i].isContentVisible;
        const activePost = visiblePosts[i] ? 'flex' : 'none'
        return <ItemOfList style={{display: activePost}}  type="I" key={post._id}>
            <ShowNumber>{i + 1}.</ShowNumber>
            <Container fake>
              <Container>
                <Container sub>
                  <BoldText>Author: </BoldText>
                  <PostData>{post.author}</PostData>
                </Container>
                <Container sub>
                  <BoldText>D: </BoldText>
                  <PostData>{post.date.slice(0, 10).replace(/-/g, '/')}</PostData>
                </Container>
              </Container>
              <Container sub>
                <BoldText>Title: </BoldText>
                <PostData>{post.title}</PostData>
              </Container>
              <Container sub style={currentItem ? showContent : hideContent}>
                <BoldText>Content:</BoldText>
                <ContentContainer>{post.content.slice(0, 80)}...</ContentContainer>
              </Container>
              <IconContainer>
                <Icon src={EditPen} onClick={() => this.handleEditPost(post)}></Icon>
                <Icon src={Trash} onClick={() => this.handleDeletePost(post._id)}></Icon>
                <Icon src={currentItem ? ArrowHide : ArrowShow} onClick={() => this.handleToggleContent(i)}></Icon>
              </IconContainer>
            </Container>
        </ItemOfList>    
    })
  
    this.setState({
      list: posts,
      postsData
    })
  }

  visiblePosts = (id = 1) => {
    const num = id * 10
    const isVisiblePostArray = [...this.props.posts].map((e, i) => {
      if(i < num && i > (num - 11)) {
        return true
      } else {
        return false
      }
      
    })
    return isVisiblePostArray;
  }

  handleToggleContent = id => {
    const { postsData, page } = this.state
    let arrayPostData = [...postsData]
    arrayPostData[id].isContentVisible = !arrayPostData[id].isContentVisible
    
    this.setState({
      postsData: arrayPostData
    })
    this.createArrayWithPosts(page);
  }

  handleDeletePost = id => {
    this.props.deletePost(id)
  }

  handleEditPost = post => {
    if( typeof this.props.onEditPost === 'function')
      this.props.onEditPost(post);
  }

  handlePagination = id => {
    this.setState({
      page: id
    })
    this.createArrayWithPosts(id);
  }

  render(){
    const { list } = this.state
    return (
      <Fragment>
        <Title text="Wpisy: " />
        <ListOfPosts>
          {list}
        </ListOfPosts>
        <Pagination onClickPagination={this.handlePagination} numberOfItems={Math.ceil(list.length / 10)} />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  posts: state.posts.list
})

export default connect(mapStateToProps, { fetchPosts, deletePost })(Blog)