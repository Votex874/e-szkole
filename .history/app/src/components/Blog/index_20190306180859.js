import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Post from './Post/index'
import SectionTitle from '../SectionTitle/index'
import Pagination from './Pagination/index'
import IconNews from '../../images/icons/calendar.png'

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

  componentDidMount = () => {
    const { news } = this.props
    let list = [];
    list = news.map((post, i) => (
        <Post key={i} content={post} />
    ))
    this.setState({
      postList: list
    })
  }

  handlePagination = (id) => {
    if(!(id === this.state.currentPage)){
      window.scrollTo(0,0)
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
          paginationClicked={this.handlePagination} 
          postList={postList} />
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