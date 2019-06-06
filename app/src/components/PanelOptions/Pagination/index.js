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
    if(numberOfItems > 1){      

      //using only on the first 2 pages
      const basicArrayAtStart = [0, 1, 2]
      //using only on the last page
      const basicArrayAtEnd = [numberOfItems - 3 , numberOfItems - 2, numberOfItems - 1]

      let arrayOfPagination = []
      for(let i = 0; i < numberOfItems; i++){
        arrayOfPagination[i] =  i
      }
      
      let newArr = []
      //using on every pages
      newArr = [activeItem - 1, activeItem, activeItem + 1]
  
      if(activeItem <= 1)
        newArr = basicArrayAtStart;
      if(activeItem >= numberOfItems - 1)
        newArr = basicArrayAtEnd
      
  
      let arrayOfPaginationItems = [...newArr].map((item, i) => {
        let id;
        switch(i){
          case 0:
            id = newArr[i]
            break;
          case 1:
            id = newArr[i]
            break;
          case 2:
            id = newArr[i]
            break;
          default:
            id = item
            break;
        }
        
        if(item === activeItem){
          return (
            <PaginationItem onClick={() => this.handleClickItem(id)} active key={item}>{item + 1}</PaginationItem>
          )
        } else {        
          return (
            <PaginationItem onClick={() => this.handleClickItem(id)} key={item}>{item + 1}</PaginationItem>
          )
        }
      })
      this.setState({
        list: arrayOfPaginationItems
      })
    }
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