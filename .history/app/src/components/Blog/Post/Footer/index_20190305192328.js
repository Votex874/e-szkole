import React from 'react'
import styled from 'styled-components'

const FooterContainer = styled.footer`

`

const Footer = ({ author, date }) => {
  return (
    <FooterContainer>
    {author} {date}
    </FooterContainer>
  )
}

export default Footer