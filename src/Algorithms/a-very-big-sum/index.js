function aVeryBigSum(ar) {
  // Write your code here
  let result = BigInt(0)
  let index = 0;
  while(index < ar.length) {
      result = result + BigInt(ar[index])
      index++;
  }
  return result
}
