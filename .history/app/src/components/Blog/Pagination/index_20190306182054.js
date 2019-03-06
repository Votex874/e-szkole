import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { lightBlue } from '../../../constColors'

const PaginationContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  @media (max-width: 767px){
    width: 200px;
  }
`

const PaginationItem = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid ${lightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px){
    
    width: 20px;
    height: 20px;
  }
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
    const { paginationItems } = this.state
    return (
      <PaginationContainer>
      {paginationItems.map(item => (
        <PaginationItem onClick={() => this.handleClick(item)} key={item}>{item + 1}</PaginationItem>
      ))}
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