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
      value: '',
      formFields: [
        {
          name: 'name',
          value: '',
          type: 'text',
          placeholder: 'Podaj swoje imie'
        },
        {
          name: 'surname',
          value: '',
          type: 'text',
          placeholder: 'Podaj swoje nazwisko'
        },
        {
          name: 'email',
          value: '',
          type: 'email',
          placeholder: 'Podaj swój email'
        },
        {
          name: 'content',
          value: '',
          type: 'textarea',
          placeholder: 'Napisz do nas wiadomość'
        }
      ]
    }
  }

  handleChange = e => {
    console.log(e.target)
    console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  render(){
    const { formFields, value } = this.state
    return (
      <FormContainer>
        {formFields.map((e, i) => {
          return <Input 
            type={e.type} 
            value={value} 
            data-id={i}
            name={e.type} 
            onChange={this.handleChange}
            placeholder={e.placeholder}  
            key={i} 
          />
        })}
        <Input type="submit" value="Wyślij" />
      </FormContainer>
    )
  }
}

export default Form