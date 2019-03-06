import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'
import { lightBlue } from '../../../constColors'

const PaginationContainer = styled.section`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 200px;
  @media (max-width: 767px){
    width: 120px;
  }
`

const PaginationItem = styled.div`
  width: 26px;
  height: 26px;
  border-radius: 5px;
  border: 1px solid ${lightBlue};
  color: ${lightBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  @media (max-width: 767px){  
    width: 20px;
    height: 20px;
  }
`

class Pagination extends Component {
  constructor(props){
    super(props)

    this.state = {
      paginationItems: [],
      activePaginationItem: {
        backgroundColor: lightBlue,
        color: '#fff'
      }
    }
  }

  componentDidMount = () => {
    this.createPaginationList(0)
  }

  createPaginationList = id => {
    const numberOfPaginationItems = Math.ceil(this.props.news.length / 5)
    let arrayOfPaginationItems = [];
    for (let i = 0; i < numberOfPaginationItems; i++) {
      if (id === i) {
        arrayOfPaginationItems[i] = <PaginationItem
          style={this.state.activePaginationItem}
          onClick={() => this.handleClick(i)}
          key={i}
        >{i + 1}</PaginationItem>
      } else {
        arrayOfPaginationItems[i] = <PaginationItem onClick={() => this.handleClick(i)} key={i}>{i + 1}</PaginationItem>
      }
    }
    this.setState({
      paginationItems: arrayOfPaginationItems
    })
  }

  handleClick = (id) => {
    const { paginationClicked } = this.props
    if(typeof paginationClicked === 'function')
      paginationClicked(id)

    this.createPaginationList(id)
  }

  render(){
    const { paginationItems } = this.state
    return (
      <PaginationContainer>
        {paginationItems}
      </PaginationContainer>
    )
  }
}

const mapStateToProps = ({ news }) => {
  return {
    news
  }
}

export default connect(mapStateToProps)(Pagination)