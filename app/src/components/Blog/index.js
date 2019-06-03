import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchPosts } from '../../reducers/actions/postsActions'

import Post from './Post/index'
import SectionTitle from '../SectionTitle/index'
import Pagination from './Pagination/index'
import IconNews from '../../images/icons/calendar.png'
import initialState from './../../reducers/initialState/initialState';

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
    const { news } = this.props
    if(this.state.postList.length === 0){
      let list = [];
      list = news.map((post, i) => (
        <Post key={i} content={post} />
      ))
      this.setState({
        postList: list
      })
    }
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
  }

  render(){
    const { postList, currentPage } = this.state
    return ( 
      <React.Fragment>
        <BlogContainer>
        <SectionTitle img={IconNews} title={this.state.title} />
          {postList.slice((currentPage * 5), ((currentPage + 1) * 5))}
        </BlogContainer>
        <Pagination 
          paginationClicked={this.handlePagination} />
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