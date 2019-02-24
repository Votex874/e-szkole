import React from 'react';
import styled from 'styled-components'

const FooterAuthor = styled.footer`
 margin-left: auto;
 display: flex;
 justify-content: flex-end;
 margin-top: 20px;
 color: #777;
 @media (max-width: 767px){
   font-size: 12px;
 }
`
const DateNews = styled.span`
  margin-left: 10px;
  font-size: 90%;
`


const Footer = ({ author, date }) => {
  return (
    <React.Fragment>
      <FooterAuthor>
        {author}
        <DateNews>{date}</DateNews>
      </FooterAuthor>
    </React.Fragment>
  )
}

export default Footer;