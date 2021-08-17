import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { Clock } from 'Utils/Clock'
export default function Timer({ korea, us }) {
  const [clock, setClock] = useState({ koreaClock: null, usClock: null })

  useEffect(() => {
    Clock(setClock)
  }, [])

  setInterval(() => {
    Clock(setClock)
  }, 60000)

  return (
    <Root>
      {us && <div>{clock.usClock}</div>}
      {korea && <div>{clock.koreaClock}</div>}
    </Root>
  )
}
const Root = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  font-size: 20px;
`
