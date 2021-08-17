import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Timer from 'Components/Timer/Timer'
import Input from 'Components/Input/Input'
import SortBox from 'Components/Sort/SortBox'
import { isValidateNumber } from 'Utils/Regex'

export default function Main() {
  const [sendNumArr, setSendNumArr] = useState([])

  const handleSortClick = () => {
    const validateNumArr = sendNumArr.filter(isValidateNumber).map(Number)
    setSendNumArr(validateNumArr)
  }

  return (
    <Root>
      <div>
        <Timer korea />
        <SortBox
          sendNumArr={sendNumArr}
          setSendNumArr={setSendNumArr}
          mode="Ascending sort"
        />
        <InputContainer>
          <Input setSendNumArr={setSendNumArr} />
          <SortBtn
            onClick={() => {
              handleSortClick()
            }}
          >
            SORT
          </SortBtn>
        </InputContainer>
        <SortBox
          sendNumArr={sendNumArr}
          setSendNumArr={setSendNumArr}
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
  /* background-image: url('https://ifh.cc/g/2dWJ1b.jpg'); */
  background-image: url('https://ifh.cc/g/89QUef.jpg');
`

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const SortBtn = styled.div`
  text-transform: uppercase;
  text-decoration: none;
  background: #d8d7dd;
  color: #000;
  padding: 15px;
  border-radius: 20px;
  display: inline-block;
  border: none;
  transition: all 0.4s ease 0s;
  cursor: pointer;
  &:hover {
    box-shadow: 0px 5px 40px -10px rgba(0, 0, 0, 0.57);
  }
`
