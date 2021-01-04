var isPalindrome = function(x) {
    
    //      x = x.toString(); 
    
    //     let newStr = ''
    
    //     for (let i = 0; i < x.length; i++) {
    //       let letter = x[i]
    
    //       newStr = letter + newStr
          
    //     }
    
    //     return newStr === x
        
        let arr = x.toString().split('')
    let start = 0; 
    let right = arr.length - 1; 
    
    while ( start < right) {
      if (arr[start] === arr[right]) {
        start++
        right--
      } else {
        return false
      }
    }
    return true
        
    };