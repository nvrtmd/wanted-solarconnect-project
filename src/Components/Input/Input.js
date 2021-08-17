import React, { useState } from 'react'
import styled from 'styled-components/macro'

export default function Input({ inputNum, setInputNum }) {
  const handleChange = (e) => {
    setInputNum(e.target.value)
  }

  return (
    <div>
      <InputBox
        onChange={(e) => {
          handleChange(e)
        }}
      />
    </div>
  )
}
const InputBox = styled.input`
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
