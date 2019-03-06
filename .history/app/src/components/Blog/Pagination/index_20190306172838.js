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
        <div onClick={() => this.handleClick(0)}>0</div>
        <div onClick={() => this.handleClick(1)}>1</div>
        <div onClick={() => this.handleClick(2)}>2</div>
        <div onClick={() => this.handleClick(3)}>3</div>
      </React.Fragment>
    )
  }
}

export default Pagination