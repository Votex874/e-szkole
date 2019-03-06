import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  color: #777;
  font-size: 16px;
`

const DateContainer = styled.span`
  font-size: 70%;
`

const Footer = ({ author, date }) => {
  return (
    <FooterContainer>
      {author} 
      <DataContainer>{date}</DataContainer>
    </FooterContainer>
  )
}

export default Footer