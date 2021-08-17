import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { isValidateNumber } from 'utils'

export default function InputBox({ setNumsArray }) {
  const [inputNum, setInputNum] = useState('')

  const handleChange = (e) => {
    setInputNum(e.target.value)
  }

  const handleBlur = () => {
    if (inputNum.length) return

    setNumsArray([])
  }

  const handleClick = () => {
    if (!inputNum.length) return

    const validateArray = inputNum
      .split(',')
      .filter(isValidateNumber)
      .map(Number)

    setNumsArray(validateArray)
  }

  return (
    <div>
      <Input value={inputNum} onChange={handleChange} onBlur={handleBlur} />
      <HomeBtn onClick={handleClick}>SORT</HomeBtn>
    </div>
  )
}
const Input = styled.input`
  width: 400px;
  box-sizing: border-box;
  border: 3px solid #ccc;
  border-radius: 30px;
  font-size: 16px;
  background-color: white;
  background-image: url('https://ifh.cc/g/EDgulH.png');
  background-size: 25px;
  background-position: 13px 8px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 47px;
  transition: all 0.45s ease 0s;
  /* margin: 30px 0; */
  &:focus {
    outline: none;
    border: 3px solid #0090b2;
  }
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
