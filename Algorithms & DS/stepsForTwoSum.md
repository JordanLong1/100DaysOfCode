	/* 
	we want to find a pair of two numbers that sum up to our target. 
	
	my steps : 
	initialize empty object to store our values in. 
	
	traverse our array, init currentNum variable. 
	
	declare another variable to find the difference between our target and our currentNum
	
	we check if the object[difference] is in our oject, if so return [difference, current]
	
	if not (else) store the currentNum in the object. 
	
	if no targetSum is found return an empty array
	*/
	

brute force way: 

iterate over array starting at 0. 

inside the iteration, iterate again starting our second pointer at 0 + 1

compare if the two pointers add up to equal the target, 

if they dont, return [] at the end