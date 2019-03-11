import React, { Component } from 'react'
import styled from 'styled-components'

const SuccessContainer = styled.div`
  width: 90%;
  margin: 15px auto;
  border: 3px solid #fff;
  color: #fff;
  @media (max-width: 767px){
    width: 240px;
  }
`

class MessageSuccess extends Component {
  render() {
    return (
      <SuccessContainer>{this.props.content}</SuccessContainer>
    )
  }
}

export default MessageSuccess