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
  transition: .5s;
  @media (max-width: 767px){
    width: 240px;
    font-size: 80%;
  }
`

const ErrorItem = styled.p`
  margin: 5px 0;
`

const Title = styled.h3`
  font-size: 115%;
  margin-bottom: 15px;
  color: red;
  font-weight: bold;
`

class MessageError extends Component{
  constructor(props){
    super(props)

    this.state = {
      style: {
        
      }
    }
  }

  componentDidMount = () => {
    const idTimeoutUnMout = setTimeout(() => {
      if(typeof this.props.onLoad === 'function') {
        this.props.onLoad();
      }
    }, 5000)
    const idTimeoutAddingStyles = setTimeout(() => {
      this.setState({
        style: {
          height: '0px',
          padding: '0px',
          opacity: '0'
        }
      })
    }, 4500)
  }

  render () {
    const { content } = this.props
    return (
      <ErrorContainer style={this.state.style}>
        <Title>Niestety nie udalo się wysłać pytania</Title>
        {content.map((e,i) => {
          return <ErrorItem key={i}>- {e}</ErrorItem>
        })}
      </ErrorContainer>
    )
  }
}

export default MessageError