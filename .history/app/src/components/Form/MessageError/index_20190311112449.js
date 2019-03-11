import React, { Component } from 'react'
import styled from 'styled-components'

const ErrorContainer = styled.div`

`

class MessageError extends Component{
  render () {
    console.log(this.props.content)
    const { content } = this.props
    return (
      <React.Fragment>
        {content.map((e,i) => {

        })}
      </React.Fragment>
    )
  }
}

export default MessageError