import React, { Component } from 'react'
import styled from 'styled-components'

const LabelElement = styled.label`

`

const InputElement = styled.input`

`

class Input extends Component {
  render() {
    const { type, name } = this.props
    return (
      <LabelElement>
        <InputElement type={type} name={name} />
      </LabelElement>
    )
  }
}

export default Input