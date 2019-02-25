import React, { Component } from 'react'
import styled from 'styled-components'

import Input from './Input/index'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 0 auto;
`

class Form extends Component{
  constructor(props){
    super(props)

    this.state = {
      formFields: [
        {
          name: 'name',
          type: 'text'
        },
        {
          name: 'surname',
          type: 'text'
        },
        {
          name: 'email',
          type: 'email'
        },
        {
          name: 'submit',
          type: 'submit'
        },
      ]
    }
  }
  render(){
    const { formFields } = this.state

    return (
      <FormContainer>
        {formFields.map((e, i) => {
          return <Input type={e.type} name={e.type} key={i} />
        })}
      </FormContainer>
    )
  }
}

export default Form