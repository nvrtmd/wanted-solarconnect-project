import styled from 'styled-components/macro'

export default function Sort({ sendNum, setSendNum, mode }) {
  let targetArr = sendNum.split(',').map(function (num) {
    return parseInt(num)
  })

  const swap = (index) => {
    let temp = targetArr[index + 1]
    targetArr[index + 1] = targetArr[index]
    targetArr[index] = temp
  }

  const sort = () => {
    for (let i = 1; i < targetArr.length; i++) {
      for (let j = i - 1; j >= 0; j--) {
        if (mode === 'Ascending sort') {
          if (targetArr[j + 1] < targetArr[j]) {
            swap(j)
          }
        } else {
          if (targetArr[j + 1] > targetArr[j]) {
            swap(j)
          }
        }
      }
    }
    return targetArr.join(`, `)
  }
  return <Root>{sendNum ? sort() : <div>{mode}</div>}</Root>
}

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid 1px #0090b2;
  border-radius: 10px;
  font-size: 20px;
  margin: 20px;
  padding: 20px;
`
