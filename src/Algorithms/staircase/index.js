
function staircase(n) {
  // Write your code here
  for (let i = 1; i <= n; i++) {   
      const spaces = n - i;
      const staircase = i;
      
      const spacesStr = ' '.repeat(spaces)
      const staircaseStr = '#'.repeat(staircase)
      
      console.log(`${spacesStr}${staircaseStr}`)
  }
}