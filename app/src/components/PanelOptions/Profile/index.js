import React, { Component } from 'react'
import styled from 'styled-components'

import { fetchUsers } from '../../../reducers/actions/usersActions'
import { connect } from 'react-redux'
import { lightBlue } from '../../../constColors'
import HiddenEye from '../../../images/icons/eye-hide.png'
import ShowedEye from '../../../images/icons/eye-show.png'
import { isLogged } from './../../../isLogged';


const MainHeader = styled.h3`
  color: ${lightBlue};
  font-weight: bold;
  width: 90%;
  margin: 20px auto 10px auto;
  text-align: center;
  font-size: 26px;
  @media (max-width: 767px){
    font-size: 20px;
  }
`
const SubHeader = styled.h5`
  color: ${lightBlue};
  width: 600px;
  margin: 2px auto;
  text-align: center;
  font-size: 14px;
  @media (max-width: 767px){
    width: 84%;
    font-size: 12px;
  }
`

const InputField = styled.input`
  border: none;
  margin-top: 5px;
  outline: none;
  border-bottom: 1px solid #ABABAB;
  transition: .2s;
  font-size: 20px;
  padding: 7px 0 7px 12px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  @media (max-width: 767px){
    font-size: 80%;
    transition: .2s;
    padding: 3px 0 3px 5px;
    border-top-left-radius: 2px; 
    border-top-right-radius: 2px;
    font-size: 80%;
  }
  &:focus{
    border-bottom: 1px solid ${lightBlue};
    color: ${lightBlue};
  }
  &:disabled{
    background-color: #F1F1F1;
    color: #919191;
  }
`

const LabelField = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  color: #ABABAB;
  font-size: 24px;
  @media (max-width: 767px){
    font-size: 80%;
  }
`

const FormHeader = styled.h4`
  margin: 25px 0;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: bold;
  color: #5E5E5E;
  @media (max-width: 767px){
    font-size: 18px;
  }
`

const AccountForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`
const ContainerPassword = styled.div`
  display: flex;
  align-items: center;
`

const IconShowPassword = styled.img`
  width: 20px;
  height: 16px;
  margin-top: 2px;
  margin-left: 10px;
  @media (max-width: 767px){
    width: 14px;
    height: 12px;
    margin-top: 2px;
    margin-left: 5px;
  }
`

const EditAccount = styled.button`
  color: ${lightBlue};
  font-weight: bold;
  font-size: 18px;
  margin: 15px 0;
  padding: 8px 14px;
  border-radius: 10px;
  background-color: #fff;
  border: 2px solid ${lightBlue};
  transition: .2s;
  cursor: pointer;
  @media (max-width: 767px){
    font-size: 12px;
    padding: 5px 12px;
  }
  @media (min-width: 1400px){ 
    &:hover{
      color: #fff;
      background-color: ${lightBlue};
    }
  }
`
const Submit = styled.input`
  font-weight: bold;
  color: ${lightBlue};
  padding: 12px 16px;
  margin: 25px 0 30px 0;
  border-radius: 15px;
  font-size: 20px;
  border: 2px solid ${lightBlue};
  background-color: #fff;
  transition: .2s;
  text-transform: uppercase;
  cursor: pointer;
  @media (max-width: 767px){
    padding: 7px 15px;
    margin: 25px 0 15px 0;
    border-radius: 10px;
    font-size: 16px;
    text-transform: none;
  }
  @media (min-width: 1400px){ 
    &:hover{
      color: #fff;
      background-color: ${lightBlue};
    }
  }
`

class Profile extends Component{
  constructor(props){
    super(props)

    this.state = {
      emailInput: '',
      passwordInput: '',
      typeOfPasswordInput: 'password',
      typeOfAccountInput: '',
      isAvailable: false,
      showPassword: false,
      loggedUser: undefined,
      passwordIcon: HiddenEye
    }
  }
  componentDidMount = () => {
    this.props.fetchUsers()
  }

  componentDidUpdate = () => {
    const currentUser = isLogged();
    const user = this.props.users.find(e => e.email === currentUser)
    if(this.state.loggedUser === undefined){      
      this.setState({
        loggedUser: user,
        emailInput: user.email,
        passwordInput: user.password,
        typeOfAccountInput: user.role
      })
    }
  }

  handleChangeEmail = e => {
    this.setState({
      emailInput: e.target.value
    })
  }

  handleChangePassword = e => {
    this.setState({
      passwordInput: e.target.value
    })
  }

  handleEditAccount = e => {
    e.preventDefault();
    this.setState({
      isAvailable: !this.state.isAvailable
    })
  }
  
  handleTogglePassword = () => {
    const { passwordIcon } = this.state
    if(passwordIcon === HiddenEye){
      this.setState({
        passwordIcon: ShowedEye,
        typeOfPasswordInput: 'text'
      })
    } else {
      this.setState({
        passwordIcon: HiddenEye,
        typeOfPasswordInput: 'password'
      })
    }
  }

  render(){
    const { isAvailable, emailInput, passwordInput, typeOfAccountInput, loggedUser, passwordIcon, typeOfPasswordInput } = this.state
    return (
      <div>
        {loggedUser !== undefined 
          ? <React.Fragment>
              <MainHeader>Witaj {loggedUser.email}</MainHeader>
              <SubHeader>Poniżej przedstawione są dane Twojego konta. Jeżeli chciałbyś coś zmienić prosimy o przesłanie do nas prośby a napewno zostanie ona jak najszybciej to możliwe rozpatrzona. Aby zmienić dane swojego konta użyj przycisku 'Edytuj konto'.
              </SubHeader>
              <AccountForm> 
                <FormHeader>
                  O to twoje dane:
                </FormHeader>  
              <EditAccount onClick={e => this.handleEditAccount(e)}>Edytuj konto</EditAccount>
                <LabelField>Nazwa / Login:
                  <InputField type="email" disabled={!isAvailable} value={emailInput} onChange={e => this.handleChangeEmail(e)}></InputField>
                </LabelField>
                <LabelField>
                  <ContainerPassword>
                    Hasło:
                    <IconShowPassword src={passwordIcon} onClick={this.handleTogglePassword}></IconShowPassword>
                  </ContainerPassword>                
                <InputField type={typeOfPasswordInput} disabled={!isAvailable} value={passwordInput} onChange={e => this.handleChangePassword(e)}></InputField>
                </LabelField>
                <LabelField>Typ konta:
                  <InputField disabled type="text" value={typeOfAccountInput}></InputField>
                </LabelField>
                <Submit type="submit" value="Wyślij Zmiany"></Submit>
              </AccountForm>
            </React.Fragment>
          : 'Trwa wczytywanie danych...'
        }
      </div>
    )
  }
}

const mapStateToProps = ({ users }) => {
  return {
    users: users.users
  }
}

export default connect(mapStateToProps, { fetchUsers })(Profile)