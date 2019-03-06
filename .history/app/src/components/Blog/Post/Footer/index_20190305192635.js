import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  color: #777;
  font-size: 16px;
  display: flex;
`

const DateContainer = styled.span`
  font-size: 50%;
  display: block;
  margin-bottom: auto;
`

const Footer = ({ author, date }) => {
  return (
    <FooterContainer>
      {author} 
      <DateContainer>{date}</DateContainer>
    </FooterContainer>
  )
}

export default Footer