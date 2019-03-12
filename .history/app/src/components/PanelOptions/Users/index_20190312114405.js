import React, { Component } from 'react'
import styled from 'styled-components'

const Title = styled.h2`

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