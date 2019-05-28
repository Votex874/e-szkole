import React from 'react'
import styled from 'styled-components'

const TitleMain = styled.h2`
  color: #5E5E5E;
  text-align: center;
  margin: 30px auto 20px auto;
  font-size: 28px;
  font-weight: bold;
  text-decoration: underline;
  @media(max-width: 767px){
    font-size: 18px;
    width: 90%;
  }
`

const Title = (props) => {
  return <TitleMain>{props.text}</TitleMain>
}

export default Title