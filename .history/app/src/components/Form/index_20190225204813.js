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
      value: '123',
      formFields: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Podaj swoje imie'
        },
        {
          name: 'surname',
          type: 'text',
          placeholder: 'Podaj swoje nazwisko'
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Podaj swój email'
        },
        {
          name: 'submit',
          type: 'submit',
          placeholder: ''
        },
      ]
    }
  }
  render(){
    const { formFields, value } = this.state

    return (
      <FormContainer>
        {formFields.map((e, i) => {
          return <Input type={e.type} value={value} name={e.type} key={i} placeholder={e.placeholder} />
        })}
      </FormContainer>
    )
  }
}

export default Form