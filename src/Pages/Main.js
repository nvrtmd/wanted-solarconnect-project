import React, { useState } from 'react'
import styled from 'styled-components/macro'
import Timer from 'Components/Timer/Timer'
import Input from 'Components/Input/Input'
import Sort from 'Components/Sort/Sort'

export default function Main() {
  const [inputNum, setInputNum] = useState('')
  const [sendNum, setSendNum] = useState('')
  const handleClick = () => {
    let targetArr = sendNum.split(',')
    for (let i = 0; i < targetArr.length; i++) {
      console.log(parseInt(targetArr[i]))
    }
    setSendNum(inputNum)
  }

  return (
    <Root>
      <div>
        <Timer korea />
        <Sort sendNum={sendNum} setSendNum={setSendNum} mode="Ascending sort" />
        <InputContainer>
          <Input inputNum={inputNum} setInputNum={setInputNum} />
          <HomeBtn
            onClick={() => {
              handleClick()
            }}
          >
            SORT
          </HomeBtn>
        </InputContainer>
        <Sort
          sendNum={sendNum}
          setSendNum={setSendNum}
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
