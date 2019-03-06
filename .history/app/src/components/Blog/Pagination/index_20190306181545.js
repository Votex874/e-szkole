import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'

const PaginationContainer = styled.section`
  display: flex;
  margin: 0 auto;
  @media (max-width: 767px){
    width: 90%;
  }
`

const PaginationItem = styled.div`

`

class Pagination extends Component {
  constructor(props){
    super(props)

    this.state = {
      paginationItems: []
    }
  }

  componentDidMount = () => {
    const numberOfPaginationItems = Math.ceil(this.props.news.length / 5)
    let arrayOfPaginationItems = [];
    for(let i = 0; i < numberOfPaginationItems; i++){
      arrayOfPaginationItems.push(i)
    }
    this.setState({
      paginationItems: arrayOfPaginationItems
    })
  }

  handleClick = (id) => {
    const { paginationClicked } = this.props
    if(typeof paginationClicked === 'function')
      paginationClicked(id)
  }

  render(){
    return (
      <PaginationContainer>
      1
      </PaginationContainer>
    )
  }
}

const mapStateToProps = ({ news }) => {
  return {
    news
  }
}

export default connect(mapStateToProps)(Pagination)