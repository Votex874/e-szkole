import React, { Component } from 'react'
import styled from 'styled-components'

const LabelElement = styled.label`
  width: 100%;
`

const InputElement = styled.input`
  width: 90%;
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