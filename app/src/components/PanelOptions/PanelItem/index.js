import React, { Component } from 'react'
import styled from 'styled-components'

import { Link } from 'react-router-dom'
import { lightBlue } from '../../../constColors'

const SingleItem = styled.li`
  color: ${lightBlue};
  text-transform: uppercase;
  margin: 5px 10px;
  padding: 10px;
  border: 2px solid ${lightBlue};
  border-radius: 5px;
  @media (max-width: 767px){
    font-size: 12px;
    padding: 5px;
  }
  @media(min-width: 1400px){
    &:hover{
      color: #fff;
      background-color: ${lightBlue};
    }
  }
`

const Alink = styled.p`
  text-decoration: none;
  color: ${lightBlue};
  @media(min-width: 1400px){
    &:hover{
      color: #fff;
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
        <Link to={content.path}>
          <SingleItem onClick={() => this.handleClick(id)}> 
            {content.name}
          </SingleItem>
        </Link>
    )
  }
}

export default PanelItem