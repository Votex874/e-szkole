import React, { Component } from 'react'

import styled from 'styled-components'
import { lightBlue } from '../../../constColors'
import { connect } from 'react-redux'
import { createUser } from '../../../reducers/actions/usersActions'
import Message from '../Message/index'
import Title from '../TitlePanel/index'

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media(max-width: 767px){

  }
`

const RadioContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 430px;
  margin: 5px 0;
  @media (max-width: 767px){
    width: 215px;
  }
`

const RadioText = styled.span`
  display: block;
  width: 70px;
`

const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px auto;
  font-size: 20px;
  color: #ABABAB;
  @media(max-width: 767px){
    font-size: 16px;
  }
`

const Input = styled.input`
  outline: none;
  transition: .2s;
  ${props => props.submit
    ? { //submit
      border: `2px solid ${lightBlue}`,
      borderRadius: '15px',
      backgroundColor: '#fff',
      color: `${lightBlue}`,
      fontWeight: 'bold',
      margin: '10px 0',
      width: '200px',
      padding: '10px',
      fontSize: '26px',
      cursor: 'pointer',
    }
    : { //input basic
      border: 'none',
      borderBottom: '1px solid #5E5E5E',
      backgroundColor: '#F1F1F1',
      color: '#ABABAB',
      width: '400px',
      padding: '15px 15px 2px 15px',
      fontSize: '20px',
    }
  }
  ${props => props.radio ? {
    margin: 0,
    padding: 0,
    width: '40px',
  } : ''}
  @media(max-width: 767px){
    ${props => props.submit
    ? { //submit
      borderRadius: '5px',
      width: '140px',
      fontSize: '18px',
    }
    : { //input basic,
      width: '200px',
      padding: '7px  5px 2px 5px',
      fontSize: '16px',
    }
  }
  }
   @media (min-width: 1400px){
    &:hover{
    ${props => props.submit
    ? {
      color: '#fff',
      backgroundColor: lightBlue
    }
    : null}
    }
    &:focus{
      ${props => props.submit
    ? null
    : {
      borderBottom: `2px solid ${lightBlue}`
    }}
    }
  }
`

class NewUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      password2: '',
      role: 'user',
      errors: [],
      messages: [],
      messageComponent: false,
    }
  }

  changeInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    const { email, password, password2, role } = this.state
    const arrayOfError = [];
    const messageArray = [];

    if (!(email.lenght === 0 || password.length === 0 || password2.length === 0 || role.length === 0)) {
      if( password === password2){     
        const userObj = {
          email,
          password,
          role
        }

        this.props.createUser(userObj)
        this.setState({
          email: '',
          password: '',
          password2: '',
          role: 'user',
        })
      } else {
        arrayOfError.push('wszystkie pola powinny zostać uzupełnione.')
        messageArray.push('Hasła muszą być takie same.')
      }
    } else {
      arrayOfError.push('wszystkie pola powinny zostać uzupełnione.')
      messageArray.push('Przepraszamy, ale pola nie mogą pozostać puste.')
    }
    this.setState({
      messageComponent: true,
      errors: arrayOfError,
      messages: messageArray
    })
    const setTime = setTimeout(() => {
      this.setState({
        messageComponent: false
      })
    }, 3000)
  }
  render() {
    const { email, password, password2, errors, messages, messageComponent } = this.state
    return (
      <React.Fragment>
        <Title text="Dodaj użytkownika" />
        <Form onSubmit={e => this.handleSubmit(e)}>
          <Label>E-mail:
            <Input type="text" name='email' value={email} onChange={e => this.changeInput(e)} />
          </Label>
          <Label>Password:
            <Input type="password" name='password' onChange={e => this.changeInput(e)} value={password} />
          </Label>
          <Label>Repeat Password:
            <Input type="password" name='password2' onChange={e => this.changeInput(e)} value={password2} />
          </Label>
          <Label>Role:
            <RadioContainer>
              <RadioText>admin</RadioText>
              <Input radio type="radio" name='role' value="admin" onChange={e => this.changeInput(e)}/>
            </RadioContainer>
            <RadioContainer>
              <RadioText>user</RadioText>
              <Input radio type="radio" name='role' checked value="user" onChange={e => this.changeInput(e)} />
            </RadioContainer>
          </Label>
          {messageComponent
            ? <Message errors={errors} messages={messages} />
            : null
          }
          <Input submit type='submit' value='Wyślij' />
        </Form>
      </React.Fragment>
    )
  }
}

export default connect(null, { createUser })(NewUser)