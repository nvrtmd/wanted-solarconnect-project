export function sort(numArray, mode) {
  const targetArr = numArray.slice()

  const swap = (index) => {
    let temp = targetArr[index + 1]
    targetArr[index + 1] = targetArr[index]
    targetArr[index] = temp
  }

  for (let i = 1; i < targetArr?.length; i++) {
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
  return targetArr
}
