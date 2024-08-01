function compareTriplets(a, b) {
  let index = 0;
  const arrayLength = a.length
  
  let aResults = 0
  let bResults = 0
  
  
  while (index < arrayLength) {
      if (a[index] > b[index]) {
          aResults++;
      }
      
      if (a[index]< b[index]) {
          bResults++;
      }
     index++; 
  }
  
  return [aResults, bResults]
}