import React, { Component } from 'react'
import styled from 'styled-components'
import { lightBlue } from '../../../constColors'

const LabelElement = styled.label`
  width: 400px;
  margin: 5px auto;
  @media (max-width: 767px){
    width: 240px;
  } 
`

const TextareaElement = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  margin: 10px auto 0 auto;
  padding: 15px 0 50px 15px;
  font-size: 90%;
  border-radius: 5px;
  background-color: #efefef;
  border: none;
  resize: none;
  transition: .2s;
  border-bottom: 3px solid ${lightBlue};
  @media (max-width: 767px){
    padding: 10px 0 50px 10px;
  }
  &:focus{
    outline: none;
    background-color: #fff;
    border-bottom: 3px solid #54F1B4;
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