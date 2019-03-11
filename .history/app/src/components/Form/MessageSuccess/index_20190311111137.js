import React, { Component } from 'react'
import styled from 'styled-components'

const SuccessContainer = styled.div`
  position: absolute;
  top: 0;
`

class MessageSuccess extends Component {
  render() {
    return (
      <SuccessContainer>{this.props.content}</SuccessContainer>
    )
  }
}

export default MessageSuccess