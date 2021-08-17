import React, { useState } from 'react'
import styled from 'styled-components/macro'
import { isValidateNumber } from 'Utils/Regex'

export default function InputBox({ setNumArray }) {
  const [inputNum, setInputNum] = useState('')

  const handleChange = (e) => {
    setInputNum(e.target.value)
  }

  const handleBlur = () => {
    if (inputNum.length) return

    setNumArray([])
  }

  const handleClick = () => {
    if (!inputNum.length) return

    const validateArray = inputNum
      .split(',')
      .filter(isValidateNumber)
      .map(Number)

    setNumArray(validateArray)
  }

  return (
    <div>
      <Input value={inputNum} onChange={handleChange} onBlur={handleBlur} />
      <SortBtn onClick={handleClick}>SORT</SortBtn>
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
  background-position: 13px 9px;
  background-repeat: no-repeat;
  padding: 12px 20px 12px 47px;
  transition: all 0.45s ease 0s;
  margin: 20px 0;
  &:focus {
    outline: none;
    border: 3px solid #0090b2;
  }
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
    background: #0090b2;
    color: #fff;
  }
`
