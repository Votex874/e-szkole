import React, { Component } from 'react'
import styled from 'styled-components'

const LabelElement = styled.label`
  width: 300px;
  margin: 5px auto;
  @media (max-width: 767px){
    width: 240px;
  } 
`

const TextareaElement = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 10px;
  font-size: 90%;
  border-radius: 5px;
  border: none;
  &:focus{
    outline: none;
  }
`

class Textarea extends Component {
  render() {
    const { name, value, placeholder, onChange } = this.props
    return (
      <LabelElement>
        <TextareaElement name={name} onChange={onChange} value={value} placeholder={placeholder} />
      </LabelElement>
    )
  }
}

export default Textarea