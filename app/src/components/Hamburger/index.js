import React, { Component } from 'react';
import styled from 'styled-components'
import hamburgerImg from '../../images/icons/hamburger.png'
import times from '../../images/icons/times.png'
import Navigation from '../Nav/index'

const Hamburger = styled.div`
  width: 40px;
  height: 40px;
`

const HamburgerImg = styled.img`
  width: 100%;
  height: 100%;
  opacity: 1;
  transition: .4s;
  position: relative;
  z-index: 10;
`

const MobileContainer = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  opacity: .9;
  z-index: 1;
  transition: .3s;
`

class Hambuger extends Component {
  constructor(props){
    super(props)

    this.body = document.querySelector('body');

    this.state = {
      imgAlt: 'hamburgerMenuIcon',
      imgSrc: hamburgerImg,
      fade: 1,
      displayMobile: 'none'
    }
  }

  handleHamburger = () => {
    const { imgSrc } = this.state;
    setTimeout( () => {
      if (imgSrc !== hamburgerImg) {
        this.body.style.overflow = "auto";
        this.setState({
          imgSrc: hamburgerImg,
          displayMobile: 'none',
          fade: 1
        })
      } else {
        this.body.style.overflow = "hidden";
        this.setState({
          imgSrc: times,
          displayMobile: 'block',
          fade: 1
        })
      }
    }, 400)
    this.setState({
      fade: 0
    })
  }

  render() {
    const { imgAlt, imgSrc, fade, displayMobile } = this.state
    return (
      <Hamburger>
        <HamburgerImg style={{opacity: fade}} src={imgSrc} alt={imgAlt} onClick={this.handleHamburger}/>
        <MobileContainer style={{display: displayMobile}}>
          <Navigation />
        </MobileContainer>
      </Hamburger>
    );
  }
}


export default Hambuger;