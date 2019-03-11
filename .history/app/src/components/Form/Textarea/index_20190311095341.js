import React, { Component } from 'react'
import styled from 'styled-components'

const LabelElement = styled.label`
  width: 100%;
  margin: 0 auto;
`

const TextareaElement = styled.textarea`
  width: 100%;
  margin: 0 auto;
  padding: 0;
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