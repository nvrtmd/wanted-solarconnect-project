export function clock(setTime) {
  const today = new Date()
  const utc = today.getTime() + today.getTimezoneOffset() * 60 * 1000
  const timeGapKr = 9 * 60 * 60 * 1000
  const koreaTime = new Date(utc + timeGapKr)

  const koreaTimeFormat = new Intl.DateTimeFormat('ko-KR', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(koreaTime)

  const usTimeFormat = new Intl.DateTimeFormat('en-US', {
    dateStyle: 'full',
    timeStyle: 'short',
  }).format(today)

  setTime((prev) => ({
    ...prev,
    koreaTime: koreaTimeFormat,
    usTime: usTimeFormat,
  }))
}
