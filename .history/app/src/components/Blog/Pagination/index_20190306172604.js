import React, { Component } from 'react'
import styled from 'styled-components'

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
      <React.Fragment>
        <div onClick={() => this.handleClick(2)}>123
          
        </div>
      </React.Fragment>
    )
  }
}

export default Pagination