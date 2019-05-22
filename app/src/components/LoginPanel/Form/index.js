import React, { Component } from 'react'
import styled from 'styled-components'
import ErrorItem from './ErrorItem/index'
import { lightBlue } from '../../../constColors'
import Message from './Message/index'
import { login } from '../../../apiServices/index'

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
`
const LabelField = styled.label`
  width: 90%;
  height: 40px;
  margin: 15px auto;
`

const InputField = styled.input`
  width: 100%;
  height: 100%;
  padding-left: 10px;
  box-sizing: border-box;
  border: none;
  background-color: #efefef;
  border-radius: 5px;
  transition: .2s;
  &:focus{
    border-bottom: 5px solid #54F1B4;
    outline: none;
    background-color: #fff;
  }
`

const LabelButton = styled.label`
  width: 150px;
  height: 40px;
  margin: 15px auto 30px auto;
`

const InputButton = styled.input`
  width: 150px;
  height: 40px;
  border-radius: 15px;
  border: 4px solid #fff;
  font-weight: bold;
  background-color: ${lightBlue};
  color: #fff;
  text-transform: uppercase;
  transition: .2s;
  cursor: pointer;
  &:focus{
    outline: none;
  }
  @media (min-width: 1401px){
    &:hover{
      color: ${lightBlue};
      background-color: #fff;
      border: 4px solid ${lightBlue};
    }
  }
`

class Form extends Component {
  constructor(props){
    super(props)

    this.state = {
      email: '',
      password: '',
      errors: [],
      message: false,
      messageText: '',
      messageStatus: ''
    }
  }

  handleChangeEmail = e => {
    this.setState({email: e.target.value})
  }

  handleChangePassword = e => {
    this.setState({ password: e.target.value })
  }

  passwordValidation = (password) => {
    let listOfPasswordErrors = [];
    if (password.length < 6) {
      listOfPasswordErrors.push('Hasło powinno mieć conajmniej 6 znaków')
    }
    if (password.length === 0) {
      listOfPasswordErrors.push('Hasło nie może być puste')
    }

    return  listOfPasswordErrors;
  }

  emailValidation = (email) => {
    let listOfEmailErrors = [];
    if (email.indexOf('@') < 0 && email.length !== 0) {
      listOfEmailErrors.push('Proszę uzupełnić email poprawnie - brakuje " @ "')
    }
    if (email.indexOf('.') < 0 && email.length !== 0) {
      listOfEmailErrors.push('Proszę uzupełnić email poprawnie - brakuje " . "')
    }
    if(email.length === 0){
      listOfEmailErrors.push('Pole email nie może być puste')
    }

    return listOfEmailErrors;
  }

  handleSubmit = (e) => { 
    e.preventDefault();
    const { email, password } = this.state;

    let listOfErrors = [];
    //validation
    listOfErrors = [...this.emailValidation(email), ...this.passwordValidation(password)]

    if(listOfErrors.length < 1){
      login().then(res => {
        for(let user of res){
          if (user.email === email && user.password === password) {
            sessionStorage.clear();
            sessionStorage.setItem(user.role, user.email)
            this.setState({
              email: '',
              password: '',
              errors: [],
              message: true,
              messageText: `Gratulacje zostałeś zalogowany, jako ${user.email}`,
              messageStatus: '#2EE84C'
            })
            setTimeout(() => {
              this.setState({
                message: false
              })
              //TODO change for correct path
              window.location = 'http://localhost:3000/panel'
            }, 3000)
            return;
          } else if (user.email !== email || user.password !== password) {
            this.setState({
              email: '',
              password: '',
              errors: [],
              message: true,
              messageText: `Przepraszamy ,ale użytkownik: ${email} nie istnieje.`,
              messageStatus: '#E51300'
            })
            setTimeout(() => {
              this.setState({
                message: false
              })
            }, 3000)
          }
        }
      })
    } 

    if(listOfErrors.length > 0){
      this.setState({
        errors: listOfErrors,
        message: true,
        messageText: 'Niestety nie udało się zalogować, przepraszamy za problem.',
        messageStatus: '#E51300'
      })
      setTimeout(() => {
        this.setState({
          message: false
        })
      }, 1000)
    } 
  }

  render() {
    const { email, password, errors, message, messageStatus,
    messageText } = this.state
    return (
      <FormContainer onSubmit={this.handleSubmit}>
        {errors.map( (e,i) => {
          return <ErrorItem name={e} key={i} />
        })}
        <LabelField>
        <InputField type="email" name="email" placeholder="podaj swój e-mail" onChange={this.handleChangeEmail} value={email}/>
        </LabelField>
        <LabelField>
        <InputField type="password" name="password" placeholder="podaj swóje hasło" onChange={this.handleChangePassword} value={password}/>
        </LabelField>
        {message ? <Message show='flex' text={messageText} status={messageStatus} /> : null}
        <LabelButton>
          <InputButton type="submit" name="submit" value="zaloguj sie"/>
        </LabelButton>
      </FormContainer>
    )
  }
}

export default Form