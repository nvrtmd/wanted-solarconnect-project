import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Timer from 'Components/Timer/Timer'
import InputBox from 'Components/InputBox/InputBox'
import Sort from 'Components/Sort/Sort'

export default function Main() {
  const [numsArray, setNumsArray] = useState([])

  return (
    <Root>
      <div>
        <Timer korea />
        <Sort numsArray={numsArray} mode="Ascending sort" />
        <InputBox setNumsArray={setNumsArray} />
        <Sort numsArray={numsArray} mode="descending sort" />
        <Timer us />
      </div>
    </Root>
  )
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`
