import React, { Component } from 'react'
import styled from 'styled-components'

const LabelElement = styled.label`
  width: 100%;
`

const InputElement = styled.input`
  width: 100%;
  margin: 0;
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