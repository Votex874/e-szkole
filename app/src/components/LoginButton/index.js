import React, { Component } from 'react';
import styled from 'styled-components'
import imgUser from '../../images/icons/loginUser.png'
import imgGreenUser from '../../images/icons/user-green.png'
import { shineOnHover, lightBlue } from '../../constColors'
import { Link } from 'react-router-dom'

const ButtonAlink = styled.span`
  width: 160px;
  height: 30px;
  font-size: 14px;
  text-transform: uppercase;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  border: 3px solid ${lightBlue};
  margin-top: 10px;
  @media (max-width: 767px){      
    position: absolute;
    top: 15px;
    left: 10px;
    width: 220px;
    height: 40px;
    font-size: 24px;
  }
  @media (min-width: 768px) and (max-width: 1400px){
    width: 30px;
  }
  @media (min-width: 1401px){
    ${shineOnHover}
    border-radius: 20px;
    line-height: normal;
    display: flex;
  }
`

const IconImg = styled.img`
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  margin-left: 15px;
  width: 14px;
  height: 14px;
  @media (max-width: 767px){
    width: 26px;
    height: 26px;
  }
  @media (min-width: 768px) and (max-width: 1400px){
    margin-left: 0;
  }
`
const SpanText = styled.span`
  color: ${lightBlue};
  @media (min-width: 768px) and (max-width: 1400px){
    display: none;
  }
`

class LoginButton extends Component {
  constructor(props){
    super(props)

    this.state = {
      loginLink: '/login',
      color: lightBlue,
      img: imgUser
    }
  }

  componentDidMount = () => {
    const user = sessionStorage.getItem('user');
    const admin = sessionStorage.getItem('admin');
    if(user !== null || admin !== null){
      this.setState({
        color: '#2EE84C',
        img: imgGreenUser
      })
    }
  }

  handleEnableScroll = () => {
    document.querySelector('body').style.overflow = "auto";
  }

  render() {
    const { loginLink, color, img } = this.state;
    const loginStatus = sessionStorage.getItem('user') || sessionStorage.getItem('admin');
    return (
      <Link onClick={this.handleEnableScroll} to={loginLink} >
        <ButtonAlink style={{ borderColor: color }}>
          <SpanText style={{ color }}>
          { loginStatus !== null 
            ? 'wyloguj się'
            : 'zaloguj się'
          }          
          </SpanText>
          <IconImg src={img} />
        </ButtonAlink>
      </Link>
    );
  }
}

export default LoginButton;