
function birthdayCakeCandles(candles) {
  // Write your code here
  let candlesCount = 0;
  let tallestCandle = 0;
  
  for (let i = 0; i < candles.length; i++) {
    if (candles[i] > tallestCandle) {
      tallestCandle = candles[i];
      candlesCount = 0;
    }
    if(candles[i] === tallestCandle) {
      candlesCount++;
    }
  }
  return candlesCount
}

function birthdayCakeCandlesV2(candles) {
  let tallestCandle = Math.max(...candles)
  let candlesCount = 0;

  for (let i = 0; i < candles.length; i++) {
    if(candles[i] === tallestCandle) {
        candlesCount++;
    }
  }
  return candlesCount
}