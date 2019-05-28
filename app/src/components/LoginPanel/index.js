import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Form from './Form/index'
import { lightBlue } from '../../constColors'
import SectionTitle from '../SectionTitle/index'
import IconSingIn from '../../images/icons/sign-in.png'
import UserLogged from '../../images/icons/userLogged.png'
import IconSignOut from '../../images/icons/sign-out.png'
import IconSignOutReverse from '../../images/icons/sign-out-reverse.png'
import ArrowRight from '../../images/icons/arrow-right.png'
import ArrowRightReverse from '../../images/icons/arrow-right-reverse.png'

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
const ButtonsContainer = styled.div`
  background-color: ${lightBlue};
  border-radius: 5px;
  color: #fff;
  padding: 25px 0;
  width: 400px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media (max-width: 767px){
    width: 300px;
    margin: 50px auto;
  }
`

const Alink = styled.span`
  color: #fff;
  width: 200px;
  border: 4px solid #fff;
  border-radius: 5px;
  padding: 10px;
  font-size: 20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
  cursor: pointer;
  transition: .2s;
  font-weight: bold;
  @media (min-width: 1401px){
    :hover{
      color: ${lightBlue};
      background-color: #fff;
    }
  }
`

const LinkImg = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 15px;
`

class LoginPanel extends Component{
  constructor(props){
    super(props)

    this.state = {
      titleIsLogOut: 'zaloguj się do panelu',
      titleIsLogIn: 'jesteś zalogowany jako',
      iconLog: IconSignOut,
      iconPanel: ArrowRight
    }
  }

  handleLogOut = () => {
    sessionStorage.clear();
    window.location = '/login'
  }

  handleChangeIconLogOut = (status) => {
    if (status === 'over' && window.innerWidth >= 1400){
      this.setState({
        iconLog: IconSignOutReverse
      })
    } else {
      this.setState({
        iconLog: IconSignOut
      })
    }
  }

  handleChangeIconMoveToPanel = (status) => {
    if(status === 'over' && window.innerWidth >= 1400){      
      this.setState({
        iconPanel: ArrowRightReverse
      })
    } else {
      this.setState({
        iconPanel: ArrowRight
      })
    }
  }

  render(){
    const { titleIsLogOut, titleIsLogIn, iconLog, iconPanel } = this.state;
    const userStatus = sessionStorage.getItem('user') || sessionStorage.getItem('admin')
    return (
      <React.Fragment>
        <Container>
          <BoxShadow>
          {userStatus !== null
            ? <Fragment>
                <SectionTitle title={`${titleIsLogIn} ${userStatus}`} img={UserLogged} />
                <ButtonsContainer>
                  <Alink onMouseOver={() => this.handleChangeIconLogOut('over')} onMouseOut={() => this.handleChangeIconLogOut('out')} onClick={this.handleLogOut}>
                    Wyloguj się
                    <LinkImg src={iconLog} />
                  </Alink>
                  <Link to='/panel'>
                    <Alink onMouseOver={() => this.handleChangeIconMoveToPanel('over')} onMouseOut={() => this.handleChangeIconMoveToPanel('out')}>
                      Przejdź do panelu 
                      <LinkImg src={iconPanel} />
                    </Alink>
                  </Link>
                </ButtonsContainer>
              </Fragment>
            : <Fragment>
                <SectionTitle title={titleIsLogOut} img={IconSingIn}/>
                <PanelContainer>
                  <Form />
                </PanelContainer>
              </Fragment> 
          }
          </BoxShadow>
          
        </Container>
      </React.Fragment>
    )
  }
}

export default LoginPanel