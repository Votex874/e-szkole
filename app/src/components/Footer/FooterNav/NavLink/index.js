import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Alink = styled.span`
  text-decoration: none;
  font-size: 14px;
  color: #777;
  @media (max-width: 767px){
    font-size: 12px;
  }
  @media (min-width: 768px) and (max-width: 1400px){
    font-size: 14px;
  }
`


const NavLink = ({ name, url }) => {
  return (
    <Link to={url}>
      <Alink>{name}</Alink>
    </Link>
  )
}

export default NavLink