// space - o(n) where n is the length of input string. its o(n) because we are creating a new string 
	// of the same length of the original string. 
	
	//time is O(n squared) because we are recreating a new string, and iterating through all the values i
    // string and adding them into "new" or in our case reversed
    function isPalindrome(string) {
    let reversed = ''
	
	for (let i = 0; i < string.length; i++) {
		let char = string[i]
		
		reversed = char + reversed
	}
	
	return reversed === string 
	
    }