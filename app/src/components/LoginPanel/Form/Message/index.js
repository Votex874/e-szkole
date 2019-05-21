import React, { Component } from 'react'
import styled from 'styled-components'

const MessageContainer = styled.div`
  width: 200px;
  background-color: #fff;
  border: 3px solid #fff;
  margin: 0 auto;
  text-align: center;
  padding: 10px;
  opacity: .98;
  border-radius: 15px;
  transition: .2s;
`

class Message extends Component {

  render() {
    const { text, status } = this.props
    return (
      <MessageContainer style={{borderColor: status, color: status}}>{text}</MessageContainer>
    )
  }
}

export default Message