import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchPosts } from '../../reducers/actions/postsActions'

import Post from './Post/index'
import SectionTitle from '../SectionTitle/index'
import IconNews from '../../images/icons/calendar.png'
import Pagination from '../PanelOptions/Pagination/index'

const BlogContainer = styled.section`
`

class Blog extends Component {
  constructor(props){
    super(props)

    this.state = {
      title: "Aktualności",
      postList: [],
      currentPage: 0
    }
  }

  componentWillMount = () => {
    this.props.fetchPosts();
  }

  componentDidUpdate = () => {
    
    if(this.state.postList.length === 0)
      this.displayPosts();
  }

  displayPosts = (p = 1) => {
    const { news } = this.props
    const visiblePosts = this.visiblePosts(p)
    
    let list = [];
    list = news.map((post, i) => {
      const activePost = visiblePosts[i] ? 'flex' : 'none'
        return <Post isActive={activePost} key={i} content={post} />
      })
    this.setState({
      postList: list
    })
  }

  visiblePosts = (id = 1) => {
    const num = id * 5
    const isVisiblePostArray = [...this.props.news].map((e, i) => {
      if(i < num && i > (num - 6)) {
        return true
      } else {
        return false
      }
    })
    return isVisiblePostArray;
  }

  handlePagination = (id) => {
    if(!(id === this.state.currentPage)){
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      })
    }
    this.setState({
      currentPage: id
    })
    this.displayPosts(id)
  }

  render(){
    const { postList, currentPage } = this.state
    return ( 
      <React.Fragment>
        <BlogContainer>
        <SectionTitle img={IconNews} title={this.state.title} />
          {postList}
        </BlogContainer>
        <Pagination onClickPagination={this.handlePagination} numberOfItems={Math.ceil(postList.length / 5)}/>
      </React.Fragment>
    )
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    news: posts.list
  }
}
 
export default connect(mapStateToProps, { fetchPosts })(Blog)