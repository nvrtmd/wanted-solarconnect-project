import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'

export default function Timer({ korea, us }) {
  const [clock, setClock] = useState({ koreaClock: null, usClock: null })

  useEffect(() => {
    clocks()
  }, [])

  const clocks = () => {
    const today = new Date()
    const utc = today.getTime() + today.getTimezoneOffset() * 60 * 1000
    const timeGapKr = 9 * 60 * 60 * 1000
    const koreaTime = new Date(utc + timeGapKr)
    const koreaTimeFormat = new Intl.DateTimeFormat('ko-KR', {
      dateStyle: 'full',
      timeStyle: 'short',
    }).format(koreaTime)
    const usTimeFormat = new Intl.DateTimeFormat('en-US', {
      dateStyle: 'full',
      timeStyle: 'short',
    }).format(today)
    setClock((prev) => ({
      ...prev,
      koreaClock: koreaTimeFormat,
      usClock: usTimeFormat,
    }))
  }

  setInterval(() => {
    clocks()
  }, 60000)

  return (
    <Root>
      {us && <div>{clock.usClock}</div>}
      {korea && <div>{clock.koreaClock}</div>}
    </Root>
  )
}
const Root = styled.div`
  display: flex;
  justify-content: center;
  font-size: 20px;
`
