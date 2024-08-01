
function diagonalDifference(arr) {
  let firstDiagonal = 0;
  let secondDiagonal = 0;
  
  for (let i = 0; i < arr.length; i++) {
      const first = arr[i][i]
      const last = arr[i][(arr[i].length - 1) - i]
      
      firstDiagonal += first;
      secondDiagonal += last;
  }
  // Write your code here
  return Math.abs(firstDiagonal - secondDiagonal)
}