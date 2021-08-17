import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import { sort } from 'utils'

export default function Sort({ numsArray, mode }) {
  const [value, setValue] = useState('')

  useEffect(() => {
    const sortedArray = sort(numsArray, mode)
    const value = sortedArray.length ? sortedArray.join(', ') : mode

    if (mode === 'Descending sort') {
      setValue(mode)

      setTimeout(() => {
        setValue(value)
      }, 3000)

      return
    }

    setValue(value)
  }, [mode, numsArray])

  return <SortWrapper>{value}</SortWrapper>
}

const SortWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #0090b2;
  border-radius: 10px;
  font-size: 20px;
  margin: 20px;
  padding: 20px;
`
