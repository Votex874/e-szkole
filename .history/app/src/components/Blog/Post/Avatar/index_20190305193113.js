import React from 'react'
import styled from 'styled-components'

const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
`

const ContainerImg = styled.div`
  width: 100%;
  height: 150px;
  margin: 0 auto;
  @media (min-width: 768px) and (max-width: 1400px){
    width: 300px;
    height: 200px;
  }
`

const Avatar = ({ img }) => {
  return (
    <ContainerImg>
      <AvatarImg src={require(`../../../../images/news/${img}.png`)} />
    </ContainerImg>
  )
}

export default Avatar