import React from 'react'
import styled from 'styled-components'

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`

const ContainerImg = styled.div`
  width: 280px;
  height: 150px;
  margin: 0 auto;
  
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
`

const Avatar = ({ img }) => {
  return (
    <ContainerImg>
      <AvatarImg src={require(`../../../../images/news/${img}.png`)} />
    </ContainerImg>
  )
}

export default Avatar