export function isValidateNumber(value) {
  const numberRegex = /^[+|-]?\.?\d+(\.?\d*)$/

  return numberRegex.test(value)
}

const swap = (targetArr, index) => {
  let temp = targetArr[index + 1]
  targetArr[index + 1] = targetArr[index]
  targetArr[index] = temp
}

export const sort = (targetArr, mode) => {
  for (let i = 1; i < targetArr.length; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (mode === 'Ascending sort') {
        if (targetArr[j + 1] < targetArr[j]) {
          swap(targetArr, j)
        }
      } else {
        if (targetArr[j + 1] > targetArr[j]) {
          swap(targetArr, j)
        }
      }
    }
  }
  return targetArr
}
