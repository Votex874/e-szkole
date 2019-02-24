import React from 'react'
import styled from 'styled-components'
import { darkBlue } from '../../../constColors'

const Item = styled.p`
  text-align: center;
  margin: 10px 0;
  line-height: 16px;
  color: ${darkBlue};
  @media (max-width: 767px){
    font-size: 18px;
  }
  @media (min-width: 768px) and (max-width: 1400px){
    font-size: 20px;
  }
`

const ListItem = ({ content }) => {
  return (
    <Item>- {content}</Item>
  )
}

export default ListItem