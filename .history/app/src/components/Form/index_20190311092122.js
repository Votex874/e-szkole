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
      name: '',
      surname: '',
      email: '',
      content: '',
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
    this.setState({ [e.target.name]: e.target.value })
  }

  render(){
    const { formFields } = this.state
    return ( 
      <FormContainer>
        {formFields.map((e, i) => {
          return <Input 
            type={e.type} 
            value={`this.state${e.type}`} 
            data={i}
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