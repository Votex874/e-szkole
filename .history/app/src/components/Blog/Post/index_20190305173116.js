import React, { Component } from 'react'
import styled from 'styled-components'

class Post extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { content } = this.props
    console.log(content)
    return (
      1
    )
  }
}

export default Post