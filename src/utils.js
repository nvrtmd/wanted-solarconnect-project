export function isValidateNumber(value) {
  const numberRegex = /^[+|-]?\.?\d+(\.?\d*)$/

  return numberRegex.test(value)
}
