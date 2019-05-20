import React, { Component } from 'react'
import styled from 'styled-components'

import { fetchUsers } from '../../../reducers/actions/usersActions'
import { connect } from 'react-redux'
import { isLogged } from '../../../isLogged'
import { lightBlue } from '../../../constColors'


const MainHeader = styled.h3`
  color: ${lightBlue};
  font-weight: bold;
  width: 90%;
  margin: 20px auto 10px auto;
  text-align: center;
  @media (max-width: 767px){
    font-size: 20px;
  }
`
const SubHeader = styled.h5`
  color: ${lightBlue};
  width: 84%;
  margin: 2px auto;
  text-align: center;
  @media (max-width: 767px){
    font-size: 12px;
  }
`

const InputField = styled.input`
  border: none;
  margin-top: 5px;
  outline: none;
  border-bottom: 1px solid #ABABAB;
  transition: .2s;
  &:focus{
    border-bottom: 1px solid ${lightBlue};
    color: ${lightBlue};
  }
`

const LabelField = styled.label`
  display: flex;
  flex-direction: column;
  margin: 10px 0;
  color: #ABABAB;
  font-size: 80%;
`

const FormHeader = styled.h4`
  margin: 25px 0;
  text-transform: uppercase;
  font-size: 18px;
  font-weight: bold;
  color: #5E5E5E;
`

const AccountForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px 0;
`

class Profile extends Component{
  constructor(props){
    super(props)

    this.state = {
      firstLabelColor: '',
      secondLabelColor: '',
      thirdLabelColor: ''
    }
  }
  componentDidMount = () => {
    this.props.fetchUsers()
  }

  handleChangeColor = (id) => {
    let firstLabel = ''
    let secondLabel = ''
    let thirdLabel = ''
    switch(id) {
      case 0:
      return (
        firstLabel = lightBlue,
        secondLabel = '',
        thirdLabel = ''
        )
      case 1:
        return (
          firstLabel = '',
          secondLabel = lightBlue,
          thirdLabel = ''
        )
      case 2: 
        return (
          firstLabel = '',
          secondLabel = '',
          thirdLabel = lightBlue
        )
      default: 
          return (            
            firstLabel = '',
            secondLabel = '',
            thirdLabel = ''
          )
    }

    console.log(firstLabel, secondLabel, thirdLabel)
    this.setState({
      firstLabelColor: firstLabel,
      secondLabelColor: secondLabel,
      thirdLabelColor: thirdLabel
    })
  }

  render(){
    const user = isLogged();
    const { users } = this.props
    const loggedUser = users.find(e => e.email !== user)
    return (
      <div>
        {loggedUser !== undefined 
          ? <React.Fragment>
              <MainHeader>Witaj {loggedUser.email}</MainHeader>
              <SubHeader>Poniżej przedstawione są dane Twojego konta. Jeżeli chciałbyś coś zmienić prosimy o przesłanie do nas prośby a napewno zostanie ona jak najszybciej to możliwe rozpatrzona.
              </SubHeader>
              <AccountForm> 
                <FormHeader>
                  O to twoje dane:
                </FormHeader>  
                <LabelField>Nazwa / Login:
                  <InputField onFocus={() => this.handleChangeColor(0)} ></InputField>
                </LabelField>
                <LabelField>Hasło:
                  <InputField onFocus={() => this.handleChangeColor(1)}></InputField>
                </LabelField>
                <LabelField>Typ konta:
                  <InputField onFocus={() => this.handleChangeColor(2)}></InputField>
                </LabelField>
              </AccountForm>
            </React.Fragment>
          : 'dada'
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