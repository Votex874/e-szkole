import React, { Component } from 'react'
import styled from 'styled-components'
import { connect } from 'react-redux'

class Blog extends Component {
  constructor(props){
    super(props)

  }
  render(){
    console.log(this.props)
    return ( 
      1
    )
  }
}

const mapStateToProps = ({ news }) => {
  return {
    news
  }
}
 
export default connect(mapStateToProps)(Blog)