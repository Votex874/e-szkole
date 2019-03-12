import React, { Component } from 'react'
import styled from 'styled-components'
import { setTimeout } from 'timers';

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
      if (typeof this.props.onLoad === 'function') {
        this.props.onLoad()
      }
    }, 5000)
    const idTimeoutAddingStyles = setTimeout(() => {
      this.setState({
        style: {
          opacity: '0'
        }
      })
    }, 4500)
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
    setTimeout(() => {
      if (typeof this.props.onLoad === 'function') {
        this.props.onLoad()
      }
    }, 500)
  }

  render() {
    return (
      <SuccessContainer style={this.state.style}>
        <CancelButton onClick={this.handleUnMount}>X</CancelButton>
        {this.props.content}
      </SuccessContainer>
    )
  }
}

export default MessageSuccess