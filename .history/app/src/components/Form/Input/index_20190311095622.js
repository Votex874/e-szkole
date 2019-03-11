import React, { Component } from 'react'
import styled from 'styled-components'

const LabelElement = styled.label`
  width: 300px;
  margin: 10px auto;
  @media (max-width: 767px){ 
    width: 280px;
  }
`

const InputElement = styled.input`
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0;
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