import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Timer from 'Components/Timer/Timer'
import InputBox from 'Components/Input/InputBox'
import SortBox from 'Components/Sort/SortBox'

export default function Main() {
  const [numArray, setNumArray] = useState([])

  return (
    <Root>
      <div>
        <Timer korea />
        <InputContainer>
          <InputBox setNumArray={setNumArray} />
        </InputContainer>
        <SortBox numArray={numArray} mode="Ascending sort" />
        <SortBox numArray={numArray} mode="Descending sort" />
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
  /* background-image: url('https://ifh.cc/g/2dWJ1b.jpg'); */
  background-image: url('https://ifh.cc/g/89QUef.jpg');
`

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`
