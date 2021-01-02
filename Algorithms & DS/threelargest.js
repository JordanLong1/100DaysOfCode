function findThreeLargestNumbers(array) {
    // we are going to want to keep track and store the 3 largest as we go through the array
      // first check if there is a number in our final array, 
      let final = [null, null, null]; 
      
  array = array.sort((a,b) => a -b); 
      
    for (let i = 0; i < array.length; i++) {
    
      if (array[i] >= final[2]) {
        final.push(array[i])
        final.shift(final[0])
      } else if (array[i] < 0) {
        final.unshift(array[i])
        final.pop(final[2])
      }
          
      }
  return final
    }