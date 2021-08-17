import React from 'react'
import styled from 'styled-components/macro'
import { Sort } from 'Utils/Sort'
export default function SortBox({ sendNumArr, mode }) {
  let targetArr = sendNumArr.slice()
  const defaultValue = mode
  const sortedArray = Sort(targetArr, mode)
  const sortingData =
    sortedArray.length > 0 ? sortedArray.join(', ') : defaultValue

  return <SortWrapper>{sortingData}</SortWrapper>
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
