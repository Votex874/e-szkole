import React, { Component } from 'react'
import styled from 'styled-components'

import Input from './Input/index'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`

class Form extends Component{
  render(){
    return (
      <FormContainer>
        <Input/> 
        <Input/> 
        <Input/> 
      </FormContainer>
    )
  }
}

export default Form