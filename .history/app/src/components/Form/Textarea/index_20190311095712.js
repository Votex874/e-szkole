import React, { Component } from 'react'
import styled from 'styled-components'

const LabelElement = styled.label`
  width: 300px;
  margin: 5px auto;
  @media (max-width: 767px){
    width: 280px;
  }
`

const TextareaElement = styled.textarea`
  width: 100%;
  box-sizing: border-box;
  margin: 0 auto;
  padding: 10px;
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