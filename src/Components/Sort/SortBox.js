import React from 'react'
import styled from 'styled-components/macro'
import { sort } from 'Utils/Sort'
export default function SortBox({ numArray, mode }) {
  const sortedArray = sort(numArray, mode)
  const value = sortedArray.length ? sortedArray.join(', ') : mode

  return <SortWrapper>{value}</SortWrapper>
}

const SortWrapper = styled.div`
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 2px #0090b2;
  border-radius: 10px;
  font-size: 20px;
  margin: 20px;
  padding: 20px;
`
