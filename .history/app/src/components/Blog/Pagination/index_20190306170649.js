import React, { Component } from 'react'
import styled from 'styled-components'

import PaginationItem from './PaginationItem/index'

class Pagination extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return (
      <PaginationItem />
    )
  }
}

export default Pagination