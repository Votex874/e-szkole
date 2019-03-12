import React, { Component } from 'react'
import styled from 'styled-components'
import { lightBlue } from '../../../constColors'

const SuccessContainer = styled.div`
  width: 400px;
  margin: 25px auto 10px auto;
  border-bottom: 5px solid #54F1B4;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px 10px;
  text-align: center;
  transition: .5s;
  position: relative;
  @media (max-width: 767px){
    width: 240px;
    font-size: 80%;
  }
`

const CancelButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-weight: bold;
  font-size: 140%;
  color: #54F1B4;
  margin: 10px 10px 0 0;
  transition: .2s;
  cursor: pointer;
  @media (min-width: 1400px){
    &:hover{
      color: ${lightBlue}
    }
  }
`

const TextContainer = styled.p`

`

class MessageSuccess extends Component {
  constructor(props){
    super(props)

    this.state = {
      style: {
        height: "auto",
      }
    }
  }

  componentDidMount = () => {
    const idTimeoutUnMount = setTimeout(() => {
      this.props.onLoad()
    }, 5000)
    const idTimeoutAddingStyles = setTimeout(() => {
      this.setState({
        style: {
          opacity: '0'
        }
      })
    }, 4500)
    if (!(typeof this.props.onLoad === 'function')) {
      clearTimeout(idTimeoutUnMount)
      clearTimeout(idTimeoutAddingStyles)
    }
  }

  handleUnMount = () => {
    this.setState({
      style: {
        opacity: '0'
      },
      itemColor: {
        color: '#fff'
      }
    })
    const unMoutTimeout = setTimeout(() => {
      this.props.onLoad()
    }, 500)
    if(!(typeof this.props.onLoad === 'function')){
      clearTimeout(unMoutTimeout)
    }
  }

  render() {
    return (
      <SuccessContainer style={this.state.style}>
        <CancelButton onClick={this.handleUnMount}>X</CancelButton>
        <TextContainer>{this.props.content}</TextContainer>
      </SuccessContainer>
    )
  }
}

export default MessageSuccess