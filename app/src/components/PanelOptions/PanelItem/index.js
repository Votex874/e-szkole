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
  transition: .2s;
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

const ActiveItem = styled.li`
  color: #fff;
  text-transform: uppercase;
  margin: 5px 10px;
  padding: 12px;
  border-radius: 5px;
  transition: .2s;
  background-color: ${lightBlue};
  font-weight: bold;
  cursor: auto;
  @media (max-width: 767px){
    font-size: 12px;
    padding: 5px;
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
        <span >        
        {content.mainView 
          ? <ActiveItem>{content.name}</ActiveItem>
          : <SingleItem onClick={() => this.handleClick(id)}>{content.name}</SingleItem>
        }
        </span>
    )
  }
}

export default PanelItem