import React, { Component } from 'react'
import styled from 'styled-components'
import SectionTitle from '../SectionTitle/index'
import IconTitle from '../../images/icons/users.png'
import Content from './Content/index'

const SectionAbout = styled.section`
  width: 60%;
  margin: 50px auto;
  @media (max-width: 767px){
    width: 94%;
  }
  @media (min-width: 768px) and (max-width: 1400px){
    width: 65%;
  }
`

class AboutUs extends Component {
  constructor(props) {
    super(props)

    this.state = {
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do     eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu sem integer vitae justo. Praesent tristique magna sit amet purus gravida quis. Imperdiet proin fermentum leo vel orci. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Est ante in nibh mauris cursus. Eu turpis egestas pretium aenean pharetra magna ac placerat. Ac felis donec et odio pellentesque diam volutpat commodo sed. Pellentesque dignissim enim sit amet venenatis urna cursus. Aliquam vestibulum morbi blandit cursus. Fermentum dui faucibus in ornare quam viverra orci. Cursus metus aliquam eleifend mi in.',
      title: 'Krótko o Naszym zespole'
    }
  }

  render(){
    const { title, content } = this.state
    return(
      <SectionAbout>
        <SectionTitle title={title} img={IconTitle} />
        <Content content={content} />
      </SectionAbout>
    )
  }
}


export default AboutUs;