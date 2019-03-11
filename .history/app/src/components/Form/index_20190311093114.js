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
    const { formFields, name } = this.state
    return ( 
      <FormContainer>
        {formFields.map((e, i) => {
          return <Input 
            type={e.type} 
            value={e.value} 
            data={i}
            name={e.type} 
            onChange={e.onChange}
            placeholder={e.placeholder}  
            key={i} 
          />
        })}
        <Input name="name" type="text" value={name} placeholder='Podaj swoje imie' onChange={this.handleChange}/>
        <Input type="submit" value="Wyślij" />
      </FormContainer>
    )
  }
}

export default Form