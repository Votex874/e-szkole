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

const Title = styled.h3`
  font-size: 115%;
`

class MessageError extends Component{
  render () {
    console.log(this.props.content)
    const { content } = this.props
    return (
      <ErrorContainer>
        <Title>Niestety nie udalo się wysłać pytania</Title>
        {content.map((e,i) => {
          return <ErrorItem key={i}>- {e}</ErrorItem>
        })}
      </ErrorContainer>
    )
  }
}

export default MessageError