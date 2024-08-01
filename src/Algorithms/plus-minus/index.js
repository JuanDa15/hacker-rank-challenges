function calcRatios(quantity,length) {
  return (quantity / length).toFixed(6)
}

function plusMinus(arr) {
  // Write your code here
  const totalNumber = arr.length
  
  let positiveNumbers = 0;
  let negativeNumbers = 0;
  let zeros = 0;
  
  for (let i = 0; i < totalNumber; i++) {
      if (arr[i] < 0) negativeNumbers++;
      if (arr[i] === 0) zeros++;
      if (arr[i] > 0) positiveNumbers++
  }
  const positiveRatio = calcRatios(positiveNumbers, totalNumber)
  const negativeRatio = calcRatios(negativeNumbers, totalNumber)
  const zeroRatio = calcRatios(zeros, totalNumber)
  
  console.log(positiveRatio)
  console.log(negativeRatio)
  console.log(zeroRatio)
}