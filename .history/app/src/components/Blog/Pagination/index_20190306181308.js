import React, { Component } from 'react'
import styled from 'styled-components'

import { connect } from 'react-redux'

const PaginationContainer = styled.section`
  display: flex;
  margin: 0 auto;
  @media (max-width: 767px){
    width: 90%;
  }
`

const PaginationItem = styled.div`

`

class Pagination extends Component {
  constructor(props){
    super(props)

    this.state = {
      paginationItems: []
    }
  }

  componentDidMount = () => {
    // for(let i = 0; i < pagesNumber; i++){
    //   console.log(i)
    //   listOfPaginationItems[i] = <PaginationItem>{i}</PaginationItem>
    // }
    // console.log(listOfPaginationItems)
    // this.setState({
    //   paginationItems: listOfPaginationItems
    // })
  }

  handleClick = (id) => {
    const { paginationClicked } = this.props
    if(typeof paginationClicked === 'function')
      paginationClicked(id)
  }

  render(){
    console.log(this.props.postList)

    return (
      <PaginationContainer>
      1
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