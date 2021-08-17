import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Timer from 'Components/Timer/Timer'
import Input from 'Components/Input/Input'
import Sort from 'Components/Sort/Sort'
import { isValidateNumber } from 'utils'

export default function Main() {
  const [sendNumsArr, setSendNumsArr] = useState([])

  const handleClick = () => {
    const validateNumsArr = sendNumsArr.filter(isValidateNumber).map(Number)

    setSendNumsArr(validateNumsArr)
  }

  return (
    <Root>
      <div>
        <Timer korea />
        <Sort
          sendNumsArr={sendNumsArr}
          setSendNumsArr={setSendNumsArr}
          mode="Ascending sort"
        />
        <InputContainer>
          <Input setSendNumsArr={setSendNumsArr} />
          <HomeBtn onClick={handleClick}>SORT</HomeBtn>
        </InputContainer>
        <Sort
          sendNumsArr={sendNumsArr}
          setSendNumsArr={setSendNumsArr}
          mode="Descending sort"
        />
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

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const HomeBtn = styled.div`
  color: #fff !important;
  text-transform: uppercase;
  text-decoration: none;
  background: #0090b2;
  padding: 15px;
  border-radius: 20px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  cursor: pointer;
  font-weight: 700;

  &:hover {
    box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  }
`
