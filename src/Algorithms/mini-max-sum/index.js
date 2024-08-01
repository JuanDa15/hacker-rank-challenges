
function miniMaxSum(arr) {
  // Write your code here
  arr.sort((a, b) => a - b)
  
  let minimun = 0;
  let maximun = 0;
  
  for (let i = 0; i < 4; i++) {
      minimun += arr[i]
      maximun += arr[(arr.length - 1) - i]
  }
  
  console.log(`${minimun} ${maximun}`)
}

function miniMaxSumV2(arr) {
  const totalSum = arr.reduce((acc, curr) => acc + curr, 0)
  const min = totalSum - Math.min(...arr)
  const max = totalSum - Math.max(...arr)
  
  console.log(`${max} ${min}`)
}