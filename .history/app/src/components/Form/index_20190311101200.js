import React, { Component } from 'react'
import styled from 'styled-components'

import Input from './Input/index'
import Textarea from './Textarea/index'
import { lightBlue } from '../../constColors'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 800px;
  margin: 40px auto;
  background-color: ${lightBlue};
  border-radius: 5px;
  box-sizing: border-box;
  padding: 20px 0;
  @media (max-width: 767px){
    width: 90%;
  }
`

const InputButton = styled.input`
  width: 50%;
  margin: 15px auto;
  @media (max-width: 767px){
    height: 40px;
  }
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
    this.setState({ [e.target.name]: e.target.value })
  }

  render(){
    const { name, surname, email, content } = this.state
    return ( 
      <FormContainer>
        <Input name="name" type="text" placeholder='Podaj swoje imie' 
          onChange={this.handleChange} 
          value={name} />
        <Input name="surname" type="text" placeholder='Podaj swoje nazwisko'
          onChange={this.handleChange}
          value={surname} />
        <Input name="email" type="email" placeholder='Podaj swoje email'
          onChange={this.handleChange}
          value={email} />   
        <Textarea name="content" placeholder="Opisz nam swój problem"
          onChange={this.handleChange}
          value={content} />   
        <InputButton type="submit" value="Wyślij" />
      </FormContainer>
    )
  }
}

export default Form