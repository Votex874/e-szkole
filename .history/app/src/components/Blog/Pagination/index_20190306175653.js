import React, { Component } from 'react'
import styled from 'styled-components'

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
  }

  handleClick = (id) => {
    if(typeof this.props.paginationClicked === 'function')
      this.props.paginationClicked(id)
  }

  render(){
    const {  } = this.props
    return (
      <PaginationContainer>
      {}
      </PaginationContainer>
    )
  }
}

export default Pagination