import React, { Component } from 'react'
import styled from 'styled-components'

class Pagination extends Component {
  constructor(props){
    super(props)
  }

  handleClick = (id) => {
    if(this.props.paginationClicked === 'function'){
      return this.props.paginationClicked(id)
    }
  }

  render(){
    return (
      <React.Fragment>
        <div onClick={() => this.handleClick(1)}>123
          
        </div>
      </React.Fragment>
    )
  }
}

export default Pagination