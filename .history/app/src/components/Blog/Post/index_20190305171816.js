import React, { Component } from 'react'
import styled from 'styled-components'

class Post extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { content } = this.props
    return (
      <React.Fragment>
        {content.data}
      </React.Fragment>
    )
  }
}

export default Post