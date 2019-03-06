import React, { Component } from 'react'
import styled from 'styled-components'

import PaginationItem from './PaginationItem/index'

class Pagination extends Component {
  constructor(props){
    super(props)
  }

  handleClick = (id) => {
    console.log(id)
    if(this.props.paginationClicked === 'function'){
      return this.props.paginationClicked(id)
    }
  }

  render(){
    return (
      <PaginationItem onClick={() => this.handleClick(1)} />
    )
  }
}

export default Pagination