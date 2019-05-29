import React, { Component } from 'react'

import styled from 'styled-components'
import { lightBlue } from '../../../constColors'
import { setTimeout } from 'timers';

const Container = styled.div`
  text-align: center;
  color: #5E5E5E;
  transition: .4s;
  @media (max-width: 767px){
    width: 200px;
    border: 3px solid;
    border-radius: 5px;
    padding: 10px;
  }
`

class Message extends Component {
  constructor(props){
    super(props)

    this.state = {
      isVisible: true,
      style: {
        opacity: '1',
        visibility: 'visible',
        borderColor: this.props.errors.length === 0 ? '#2EE84C' : '#E51300'
      }
    }
  }

  componentDidMount = () => {
    if (this.state.isVisible){
      setTimeout(() => {
        this.setState({
          isVisible: false,
          style: {
            opacity: '0',
            visibility: 'hidden'
          }
        })
      }, 2500)
    }
  }

  render() {
    return (
      <React.Fragment>
        {this.props.messages.length > 0
          ? <Container style={this.state.style}>{this.props.messages[0]}</Container>
          : null
        }
      </React.Fragment>
    )
  }
}

export default Message