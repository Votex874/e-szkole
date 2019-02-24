import React, { Component } from 'react';
import styled from 'styled-components'
import Logo from '../Logo/index'
import Navigation from '../Nav/index'
import Hamburger from '../Hamburger/index'

const Header = styled.header`
 max-width: 1400px;
 height: 100px;
 margin: 0 auto;
 display: flex;
 justify-content: space-between;
 align-items: center;
 box-sizing: border-box;
 margin-top: 15px;
 @media (max-width: 1400px){
   width: 96%;
   height: 50px;
   align-items: center;
 }
`

class HeaderMain extends Component {
  constructor(props){
    super(props)

    this.state = {
      width: 0
    }
  }

  componentDidMount = () => {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth });
  }

  render() {
    const { width } = this.state;
    return (
      <Header>
        <Logo />
        { width <= 767 ? <Hamburger /> : <Navigation /> }
      </Header>
    ); 
  }
}

export default HeaderMain;