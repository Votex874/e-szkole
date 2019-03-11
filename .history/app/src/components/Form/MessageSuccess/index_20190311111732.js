import React, { Component } from 'react'
import styled from 'styled-components'

const SuccessContainer = styled.div`
  width: 90%;
  margin: 15px auto;
  border: 3px solid #54F1B4;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px 5px;
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