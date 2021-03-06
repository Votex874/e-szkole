import React, { Component } from 'react';
import styled from 'styled-components'
import { connect } from 'react-redux'
import { fetchPosts } from '../../reducers/actions/postsActions'
import Title from './Title/index'
import Content from './Content/index'
import Avatar from './Avatar/index'
import Footer from './Footer/index'
import calendaryImg from '../../images/icons/calendar.png'
import SectionTitle from '../SectionTitle/index'

const ArticleContainer = styled.article`
  display: block;
  height: auto;
  @media (max-width: 767px){
    padding-bottom: 5px;
    border-bottom: 2px dotted #fff;
    margin-bottom: 15px;
  } 
`

const SectionContent = styled.section`
  height: auto;
  display: block;
`

const NewsContainer = styled.section`
  margin: 30px auto 0 auto;
  width: 60%;
  height: auto;
  @media (max-width: 767px){  
    width: 94%;
    margin: 30px auto 0 auto;
  }
  @media (min-width: 768px) and (max-width: 1400px){
    width: 65%;
    margin: 60px auto 0 auto;
  }
`

class News extends Component {
  constructor(props){
    super(props)

    this.state = {
      newsList: [],
      title: 'co u nas słychać'
    }
  }

  componentWillMount = () => {
    if(this.state.newsList.length === 0)
      this.props.fetchPosts()
  }

  componentDidUpdate = () => {
    const { news } = this.props
    let listOfNews = [];
    let i = 0;
    if(this.state.newsList.length === 0){
      for (const key of Object.keys(news)) {
        listOfNews[i] = 
        <ArticleContainer data={news[key]} key={key}>
          <Title title={news[key].title} />
          <SectionContent>
            <Avatar img='news02' />
            <Content content={news[key].content} />
          </SectionContent>
          <Footer author={news[key].author} date={news[key].date} />
        </ArticleContainer>
        i++;
      }
      this.setState({
        newsList: listOfNews
      }) 
    }
  }

  render() {
    const { newsList, title } = this.state
    return (
      <NewsContainer>
        <SectionTitle title={title} img={calendaryImg} />
        {newsList.slice(0, 3)}
      </NewsContainer>
    );
  }
}

const mapStateToProps = ({ posts }) => {
  return {
    news: posts.list
  }
}

export default connect(mapStateToProps, { fetchPosts })(News);