import React, { Component } from 'react'
import styled from 'styled-components'

import PanelItem from './PanelItem/index'

const OptionsList = styled.ul`
  display: flex;
`

class PanelOptions extends Component{
  constructor(props){
    super(props)

    this.state = {
      list: ['użytkownicy', 'blog', 'przykład']
    }
  }
  render(){
    return (
      2
    )
  }
}

export default PanelOptions