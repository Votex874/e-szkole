import React, { Component } from 'react'
import styled from 'styled-components'
import Form from './Form/index'
import { lightBlue } from '../../constColors'
import SectionTitle from '../SectionTitle/index'
import IconSingIn from '../../images/icons/sign-in.png'

const Container = styled.section`
  @media (min-width: 1400px){
    height: 60vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-bottom: 150px;
  }
`
const BoxShadow = styled.div`
  @media (min-width: 1400px){
    margin: 50px auto;
    box-shadow: 5px 5px 20px 0px rgba(0, 0, 0, 0.5);
    border-radius: 10px;
    width: 500px;
    padding: 15px 0;
  }
`

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
        <Container>
          <BoxShadow>
            <SectionTitle title={title} img={IconSingIn}/>
            <PanelContainer>
              <Form />
            </PanelContainer>
          </BoxShadow>
        </Container>
      </React.Fragment>
    )
  }
}

export default LoginPanel