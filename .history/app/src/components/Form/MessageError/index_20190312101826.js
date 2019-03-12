import React, { Component } from 'react'
import styled from 'styled-components'
import { lightBlue } from '../../../constColors'

const ErrorContainer = styled.div`
  width: 400px;
  margin: 25px auto 10px auto;
  border-bottom: 5px solid red;
  box-sizing: border-box;
  background-color: #fff;
  border-radius: 5px;
  padding: 20px 10px;
  transition: .5s;
  position: relative;
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

const CancelButton = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-weight: bold;
  font-size: 140%;
  color: red;
  margin: 10px 10px 0 0;
  transition: .2s;
  cursor: pointer;
  @media (min-width: 1400px){
    &:hover{
      color: ${lightBlue}
    }
  }
`

class MessageError extends Component{
  constructor(props){
    super(props)
    this.state = {
      style: {},
      itemColor: {}
    }
  }

  componentDidMount = () => {
    const idTimeoutUnMout = setTimeout(() => {
       this.props.onLoad();
    }, 5000)
    const idTimeoutAddingStyles = setTimeout(() => {
      this.setState({
        style: {
          opacity: '0'          
        },
        itemColor: {
          color: '#fff'
        }
      })
    }, 4500)
    if (!(typeof this.props.onLoad === 'function')) {
      clearTimeout(idTimeoutUnMout)
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
    setTimeout(() => {
      if (typeof this.props.onLoad === 'function') {
        this.props.onLoad()
      }
    }, 500)
  }

  render () {
    const { content } = this.props
    const { style, itemColor } = this.state
    return (
      <ErrorContainer style={style}>
        <Title>Niestety nie udalo się wysłać pytania</Title>
        <CancelButton onClick={this.handleUnMount}>X</CancelButton>
        {content.map((e,i) => {
          return <ErrorItem style={itemColor} key={i}>- {e}</ErrorItem>
        })}
      </ErrorContainer>
    )
  }
}

export default MessageError