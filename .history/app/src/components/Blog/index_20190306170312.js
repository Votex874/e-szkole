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
      postList: []
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

  render(){
    const { postList } = this.state
    return ( 
      <React.Fragment>
        <BlogContainer>
        <SectionTitle img={IconNews} title={this.state.title} />
          {postList.slice(5, 10)}
        </BlogContainer>
        <Pagination pagesNumber={Math.ceil((postList.length) / 5)} />
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