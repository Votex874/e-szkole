import React, { Component } from 'react'
import styled from 'styled-components'

import { lightBlue } from '../../../constColors'

const SingleItem = styled.li`
  color: ${lightBlue};
  text-transform: uppercase;
  margin: 5px 10px;
  padding: 10px;
  border: 2px solid ${lightBlue};
  border-radius: 5px;
  @media(min-width: 1400px){
    &:hover{
      color: #fff;
      background-color: ${lightBlue};
    }
  }
`

class PanelItem extends Component{

  handleClick = (id) => {
    if (typeof this.props.handleClick === 'function'){
      this.props.handleClick(id)
    }
  }

  render(){
    const { content, id } = this.props
    return (
      <React.Fragment>
        <SingleItem onClick={() => this.handleClick(id)}>{content}</SingleItem>
      </React.Fragment>
    )
  }
}

export default PanelItem