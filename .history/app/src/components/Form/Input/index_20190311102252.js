import React, { Component } from 'react'
import styled from 'styled-components'

const LabelElement = styled.label`
  width: 400px;
  margin: 10px auto;
  padding: 5px 0;
  @media (max-width: 767px){ 
    width: 240px;
  }
`

const InputElement = styled.input`
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 15px;
  font-size: 80%;
  border-radius: 5px;
  border: none;
  background-color: #efefef;
  transition: .2s;
  @media (max-width: 767px){
    padding: 10px;
  }
  &:focus{
    outline: none;
    border-bottom: 3px solid #54F1B4;
    background-color: #fff;
  }
`

class Input extends Component {
  render() {
    const { type, name, value, placeholder, onChange } = this.props
    return (
      <LabelElement>
        <InputElement type={type} name={name} onChange={onChange} value={value} placeholder={placeholder} />
      </LabelElement>
    )
  }
}

export default Input