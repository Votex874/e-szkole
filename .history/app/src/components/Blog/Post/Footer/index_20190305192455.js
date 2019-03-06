import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`
  color: #777;
  font-size: 16px;
`

const DateContainer = styled.span`
  font-size: 12px;
`

const Footer = ({ author, date }) => {
  return (
    <FooterContainer>
    {author} {date}
    </FooterContainer>
  )
}

export default Footer