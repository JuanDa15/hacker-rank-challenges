
function timeConversion(s) {
  const isMorningHour = s.toLowerCase().includes('am')
  const isAfternoonHour = s.toLowerCase().includes('pm')
  
  const pureHour = s.toLowerCase().replace('am','').replace('pm','')
  let [hour, minutes, seconds] = pureHour.split(':')
  
  if (isMorningHour && Number(hour) === 12) {
      hour = '00'
  }

    if (isAfternoonHour &&  ![12, 0].includes(Number(hour))) {
      hour = 12 + Number(hour)
  }
  return `${hour}:${minutes}:${seconds}`
}