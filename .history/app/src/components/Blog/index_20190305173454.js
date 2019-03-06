import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

import Post from './Post/index'
import SectionTitle from '../SectionTitle/index'
import IconNews from '../../images/icons/calendar.png'

const BlogContainer = styled.section`
`

class Blog extends Component {
  constructor(props){
    super(props)

  }

  render(){
    const { news } = this.props
    return ( 
      <BlogContainer>
      <SectionTitle img={IconNews} title="Nasze nowości" />
        {news.map((post, i) => (
          <Post key={i} content={post} />
        ))}
      </BlogContainer>
    )
  }
}

const mapStateToProps = ({ news }) => {
  return {
    news
  }
}
 
export default connect(mapStateToProps)(Blog)