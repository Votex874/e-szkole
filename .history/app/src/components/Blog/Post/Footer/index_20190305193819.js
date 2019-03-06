import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  color: #777;
  font-size: 16px;
  display: flex;
  justify-content: flex-end;
  margin-top: 20px;
`

const DateContainer = styled.span`
  margin-left: 8px;
  font-size: 50%;
  display: block;
  margin: 2px 0 auto 5px;
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