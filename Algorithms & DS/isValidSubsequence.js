function isValidSubsequence(array, sequence) {
    let arr = 0; // array pointer
	let seq = 0; // seq pointer
	
	while (arr < array.length && seq < sequence.length) {
		if (array[arr] === sequence[seq]) {
            // if equal, move both pointers up
			arr++ 
			seq++
		} else {
            // only move array pointer up.
			arr++
		}
    }
    // if the seq count is the same as sequence.length we are good :)
	return seq === sequence.length;
}