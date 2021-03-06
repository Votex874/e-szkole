import React, { Component } from 'react'
import styled from 'styled-components'

const SuccessContainer = styled.div`
  width: 400px;
  margin: 25px auto 10px auto;
  border-bottom: 5px solid #54F1B4;
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

class MessageSuccess extends Component {

  componentDidMount = () => {
    if(typeof this.props.onLoad === 'function'){
      
    }
  }

  render() {
    return (
      <SuccessContainer>{this.props.content}</SuccessContainer>
    )
  }
}

export default MessageSuccess