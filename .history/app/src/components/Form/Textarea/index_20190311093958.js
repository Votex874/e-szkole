import React, { Component } from 'react'
import styled from 'styled-components'

const LabelElement = styled.label`

`

const TextareaElement = styled.textarea`

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