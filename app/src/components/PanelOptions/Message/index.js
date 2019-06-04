import React, { Component } from 'react'

import styled from 'styled-components'
import { grey } from '../../../constColors'
import { setTimeout } from 'timers';

const Container = styled.div`
  text-align: center;
  color: ${grey};
  transition: .4s;
  border: 3px solid;
  padding: 15px;
  border-radius: 10px;
  @media (max-width: 767px){
    width: 200px;
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
        borderColor: !this.props.error ? '#2EE84C' : '#E51300'
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
            visibility: 'hidden',
            borderColor: this.state.style.borderColor
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