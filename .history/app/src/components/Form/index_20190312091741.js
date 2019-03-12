import React, { Component } from 'react'
import styled from 'styled-components'

import Input from './Input/index'
import Textarea from './Textarea/index'
import SectionTitle from '../SectionTitle/index'
import PenIcon from '../../images/icons/pen.png'
import MessageError from './MessageError/index'
import MessageSuccess from './MessageSuccess/index'
import { lightBlue } from '../../constColors'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin: 40px auto;
  background-color: ${lightBlue};
  border-radius: 5px;
  box-sizing: border-box;
  padding: 30px 0;
  @media (max-width: 767px){
    width: 300px;
  }
`

const InputButton = styled.input`
  width: 200px;
  margin: 15px auto 0 auto;
  font-weight: bold;
  border-radius: 10px;
  border: 3px solid #fff;
  color: #fff;
  font-size: 110%;
  background-color: ${lightBlue};
  cursor: pointer;
  height: 40px;
  transition: .2s;
  @media (max-width: 767px){
    width: 50%;
  }
  @media (min-width: 1400px){
    &:hover{
      color: ${lightBlue};
      background-color: #fff;
    }
  }
`

const BoxShadowContainer = styled.div`
  position: relative;
  @media (min-width: 1400px){
    margin: 50px auto;
    box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    width: 600px;
    padding: 15px 0;
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
      status: '',
      validationError: [],
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

  handleValidation = e => {
    e.preventDefault();
    const { name, email, content, surname } = this.state
    const arrayOfErrors = []

    if (name.length === 0){
      arrayOfErrors.push('Pole imie powinno zostać uzupełnione')
    }
    if (surname.length === 0){
      arrayOfErrors.push('Pole nazwisko powinno zostać uzupełnione')
    }
    if (content.length === 0) {
      arrayOfErrors.push('Pole z wiadomością do nas nie powinno zostać puste')
    }
    if (email.indexOf('@') === -1){
      arrayOfErrors.push('Pole email powinno zawierać znak  " @ "  ')
    }
    if (email.indexOf('.') === -1) {
      arrayOfErrors.push('Pole email powinno zawierać znak  " . "  ')
    }

    if (arrayOfErrors.length < 0){
      console.log('validacja przeszła pomyślnie')
    } else {
      console.log('validacja nie przeszła prawidłowo')
    }

    this.setState({
      name: '',
      surname: '',
      email: '',
      content: '',
      status: arrayOfErrors.length === 0 ? 'Dziękujemy za pytanie, wkrótce się odezwiemy.' : '',
      validationError: arrayOfErrors
    })
  }

  hideMessages = () => {
    this.setState({
      status: '',
      validationError: []
    })
  }

  render(){
    const { name, surname, email, content, validationError, status } = this.state
    return ( 
      <BoxShadowContainer>
        <SectionTitle title="Napisz do nas" img={PenIcon}/>
        <FormContainer onSubmit={this.handleValidation}>
        <Input name="name" type="text" placeholder='Podaj swoje imie*' 
        onChange={this.handleChange} 
        value={name} />
        <Input name="surname" type="text" placeholder='Podaj swoje nazwisko*'
        onChange={this.handleChange}
        value={surname} />
        <Input name="email" type="email" placeholder='Podaj swój email*'
        onChange={this.handleChange}
        value={email} />   
        <Textarea name="content" placeholder="O co chciałbyś nas zapytać ?*"
        onChange={this.handleChange}
        value={content} />   
        <InputButton type="submit" value="Wyślij" />
        {validationError.length === 0 ? null : <MessageError onLoad={this.hideMessages} content={validationError} />}
          {status.length === 0 ? null : <MessageSuccess onLoad={this.hideMessages}  content={status} />}
        </FormContainer>
      </BoxShadowContainer>
    )
  }
}

export default Form