import React, { Component } from 'react'
import styled from 'styled-components'

import Input from './Input/index'
import Textarea from './Textarea/index'
import SectionTitle from '../SectionTitle/index'
import PenIcon from '../../images/icons/pen.png'
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
  @media (min-width: 1400px){
    margin: 50px auto;
    box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    width: 500px;
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
      <React.Fragment>
        <SectionTitle title="Napisz do nas" img={PenIcon}/>
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
      </React.Fragment>
    )
  }
}

export default Form