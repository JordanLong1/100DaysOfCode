function twoSum(array,target) {

    for (let i = 0; i < array .length; i++) {
    	let current = array[i];
        
    	for (let j = i + 1; j < array.length; j++) {
    		let secondCurrent = array[j];
            
    		if (current + secondCurrent === target) {
    			return [current, secondCurrent];
    	  };
       };
    };
    return [];
}

function twoNumberSum(array, target) {

	let nums = {}; 
	
	for (let val in array) {
		let currentNum = array[val];
		
		let difference = target - currentNum;
		
		if (nums[difference]) {
			return [currentNum, difference];
		} else {
			nums[currentNum] = true; 
		}
	}

return [];
}

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)
