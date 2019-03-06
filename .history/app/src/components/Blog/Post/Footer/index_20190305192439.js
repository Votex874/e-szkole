import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  color: #777;
`

const DateContainer = styled.span`
  font-size: 70%;
`

const Footer = ({ author, date }) => {
  return (
    <FooterContainer>
    {author} {date}
    </FooterContainer>
  )
}

export default Footer