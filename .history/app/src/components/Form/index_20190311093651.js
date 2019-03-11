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
      textarea: '',
      formFields: [
        {
          name: 'name',
          type: 'text',
          value: '',
          placeholder: 'Podaj swoje imie',
          onChange: this.handleChangeName
        },
        {
          name: 'surname',
          type: 'text',
          value: '',
          placeholder: 'Podaj swoje nazwisko',
          onChange: this.handleChangeSurName
        },
        {
          name: 'email',
          type: 'email',
          value: '',
          placeholder: 'Podaj swój email',
          onChange: this.handleChangeEmail
        }
      ]
    }
  }

  handleChange = e => {
    console.log(e.target.name)
    console.log(e.target.value)
    this.setState({ [e.target.name]: e.target.value })
  }

  render(){
    const { name } = this.state
    return ( 
      <FormContainer>
        <Input name="name" type="text" placeholder='Podaj swoje imie' 
          onChange={this.handleChange} 
          value={name} />

        <Input name="surname" type="text" placeholder='Podaj swoje nazwisko'
          onChange={this.handleChange}
          value={name} />

        <Input name="email" type="email" placeholder='Podaj swoje email'
          onChange={this.handleChange}
          value={name} />   


        <Input type="submit" value="Wyślij" />
      </FormContainer>
    )
  }
}

export default Form