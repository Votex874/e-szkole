import React, { Component } from 'react'
import styled from 'styled-components'
import Form from './Form/index'
import { lightBlue } from '../../constColors'
import SectionTitle from '../SectionTitle/index'
import IconSingIn from '../../images/icons/sign-in.png'


const PanelContainer = styled.div`
  background-color: ${lightBlue};
  border-radius: 5px;
  color: #fff;
  padding-top: 25px;
  width: 400px;
  margin: 50px auto;
  @media (max-width: 767px){
    width: 90%;
    margin: 50px auto;
  }
`

class LoginPanel extends Component{
  constructor(props){
    super(props)

    this.state = {
      title: 'zaloguj się do panelu'
    }
  }

  render(){
    const { title } = this.state;
    return (
      <React.Fragment>
        <SectionTitle title={title} img={IconSingIn}/>
        <PanelContainer>
          <Form />
        </PanelContainer>
      </React.Fragment>
    )
  }
}

export default LoginPanel