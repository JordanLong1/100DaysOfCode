function binarySearch(array, target) {
    // Write your code here.
      
      let left = 0; 
      
      let right = array.length - 1;
      
      
      while (left <= right) {
              let middle = Math.floor((left + right) / 2);
  
          if (array[middle] === target) {
              return middle;  
          } else if (array[middle] < target) {
              left = middle + 1;
          } else {
              right = middle - 1;
          };
      };
      return - 1;
  }