import React, { Component } from 'react'
import styled from 'styled-components'

import { lightBlue } from '../../../constColors'

const PaginationContainer = styled.ul`
  width: 80%;
  margin: 0 auto 0 0;
  display: flex;
  justify-content: flex-end;
  font-size: 24px;
  @media (max-width: 767px){
    font-size: 16px;
    margin: 0 auto 0 30px;
  }
`

const PaginationItem = styled.li`
  color: ${lightBlue};
  border: 2px solid ${lightBlue};
  padding: 5px 10px;
  border-radius: 5px;
  margin: 10px;
  cursor: pointer;
  transition: .2s;
  box-sizing: border-box;
  ${props => props.active ? {
    color: '#fff',
    backgroundColor: `${lightBlue}`
  } : ''}
  @media (max-width: 767px){
    padding: 2px 5px;
  }
  @media (min-width: 1400px){
    &:hover{
      background-color: ${lightBlue};
      color: #fff;
    }
  }
`

class Pagination extends Component {
  constructor(props){
    super(props)

    this.state = {
      list: [],
      activeItem: 0
    }
  }

  componentDidUpdate = () => {
    if(this.state.list.length === 0){
      this.createPaginationView();
    }
  }

  createPaginationView = (activeItem = 0) => {
    const { numberOfItems } = this.props
    let arrayOfPagination = []
    for(let i = 0; i < numberOfItems; i++){
      arrayOfPagination[i] = i
    }
    let arrayOfPaginationItems = [...arrayOfPagination].map(item => {
      if(item === activeItem){
        return (
          <PaginationItem onClick={() => this.handleClickItem(item)} active key={item}>{item + 1}</PaginationItem>
        )
      } else {        
        return (
          <PaginationItem onClick={() => this.handleClickItem(item)} key={item}>{item + 1}</PaginationItem>
        )
      }
    })
    this.setState({
      list: arrayOfPaginationItems
    })
  }

  handleClickItem = (id) => {
    if(typeof this.props.onClickPagination === 'function')
      this.props.onClickPagination(id + 1)
    this.createPaginationView(id);
  }

  render(){
    return (
      <PaginationContainer>
        {this.state.list}
      </PaginationContainer>
    )
  }
}

export default Pagination