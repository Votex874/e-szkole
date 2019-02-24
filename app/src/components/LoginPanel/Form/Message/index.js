import React, { Component } from 'react'
import styled from 'styled-components'

const MessageContainer = styled.div`
  width: 200px;
  height: 110px;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: #FF2120;
  opacity: .98;
  color: #fff;
  top: 50%;
  left: calc(50% - 100px);
  border-radius: 15px;
  transition: .2s;
`

class Message extends Component {

  render() {
    const { text, status } = this.props
    return (
      <MessageContainer style={{backgroundColor: status}}>{text}</MessageContainer>
    )
  }
}

export default Message