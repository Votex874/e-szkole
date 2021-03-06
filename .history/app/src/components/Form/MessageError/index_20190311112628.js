import React, { Component } from 'react'
import styled from 'styled-components'

const ErrorContainer = styled.div`
  width: 400px;
  margin: 25px auto 10px auto;
  border-bottom: 5px solid red;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px 10px;
  text-align: center;
  @media (max-width: 767px){
    width: 240px;
    font-size: 80%;
  }
`

const ErrorItem = styled.span`

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