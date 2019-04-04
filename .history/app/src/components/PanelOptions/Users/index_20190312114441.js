import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h2`
  text-transform: uppercase;
  font-size: 120%;
  margin: 10px 0 10px 5px;
`

class Users extends Component{
  render(){
    return (
      <React.Fragment>
        <Title>Zarządzaj członkami przedszkola</Title>
      </React.Fragment>
    )
  }
}

export default Users