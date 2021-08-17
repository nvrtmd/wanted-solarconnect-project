import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import { clock } from 'Utils/Clock'

export default function Timer({ korea, us }) {
  const [time, setTime] = useState({ koreaTime: null, usTime: null })

  useEffect(() => {
    clock(setTime)
  }, [])

  setInterval(() => {
    clock(setTime)
  }, 60000)

  return (
    <Root>
      {us && <div>{time.usTime}</div>}
      {korea && <div>{time.koreaTime}</div>}
    </Root>
  )
}
const Root = styled.div`
  color: white;
  display: flex;
  justify-content: center;
  font-size: 20px;
`
