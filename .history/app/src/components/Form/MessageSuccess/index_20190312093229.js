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
    const idTimeout = setTimeout(() => {
      if (typeof this.props.onLoad === 'function') {
        this.props.onLoad()
      }
    }, 5000)
    const idTimeout2 = setTimeout(() => {
      this.setState({
        style: {
          height: '0px',
          padding: '0px',
          opacity: '0'
        }
      })
    }, 4000)
  }

  render() {
    return (
      <SuccessContainer style={this.state.style}>{this.props.content}</SuccessContainer>
    )
  }
}

export default MessageSuccess