import React from 'react'
import styled from 'styled-components'

const ErrorSpan = styled.span`
  color: #fff;
  margin: 10px auto 10px 5%;
  padding-bottom: 5px;
`

const ErrorItem = ({ name }) => {
  return(
    <ErrorSpan>- {name}</ErrorSpan>
  )
}

export default ErrorItem