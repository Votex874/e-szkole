import React, { Component } from 'react'
import styled from 'styled-components'

const Label = styled.label`

`

const Input = styled.input`

`

class Input extends Component {
  render() {
    return (
      <Label>
        <Input />
      </Label>
    )
  }
}

export default Input