import React, { Component } from 'react'
import styled from 'styled-components'

const PaginationContainer = styled.section`
  display: flex;
  margin: 0 auto;
  @media (max-width: 767px){
    width: 90%;
  }
`

class Pagination extends Component {
  constructor(props){
    super(props)
  }

  handleClick = (id) => {
    if(typeof this.props.paginationClicked === 'function')
      this.props.paginationClicked(id)
  }

  render(){
    return (
      <PaginationContainer>
        <div onClick={() => this.handleClick(0)}>0</div>
        <div onClick={() => this.handleClick(1)}>1</div>
        <div onClick={() => this.handleClick(2)}>2</div>
        <div onClick={() => this.handleClick(3)}>3</div>
      </PaginationContainer>
    )
  }
}

export default Pagination