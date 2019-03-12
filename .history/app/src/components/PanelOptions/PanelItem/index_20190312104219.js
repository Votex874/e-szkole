import React, { Component } from 'react'
import styled from 'styled-components'

const SingleItem = styled.li`

`

class PanelItem extends Component{

  handleClick = (id) => {
    if (typeof this.props.handleClick === 'function'){
      this.props.handleClick(id)
    }
  }

  render(){
    const { content } = this.props
    return (
      <React.Fragment>
        <SingleItem onClick={this.handleClick}></SingleItem>
      </React.Fragment>
    )
  }
}

export default PanelItem