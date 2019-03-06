import React from 'react'
import styled from 'styled-components'

const AvatarImg = styled.img`

`

const ContainerImg = styled.div`
  width: 280px;
  height: 150px;
`

const Avatar = ({ img }) => {
  return (
    <ContainerImg>
      <AvatarImg src={require(`../../../../images/news/${img}.png`)} />
    </ContainerImg>
  )
}

export default Avatar