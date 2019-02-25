import React, { Component } from 'react'
import styled from 'styled-components'

import Label from './Label/index'
import Input from './Input/index'

class Form extends Component{
  render(){
    return (
      <React.Fragment>
        <Label>
          <Input/>
        </Label>
      </React.Fragment>
    )
  }
}

export default Form