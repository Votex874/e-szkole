import React from 'react'
import styled from 'styled-components'
import { lightBlue } from '../../../constColors'

const Item = styled.p`
  padding: 5px;
  border-bottom: 1px solid ${lightBlue};
  margin: 0 5px;
`

const SidebarMenuItem = ({ content }) => {
  return (
    <Item>
      {content}
    </Item>
  )
}

export default SidebarMenuItem 