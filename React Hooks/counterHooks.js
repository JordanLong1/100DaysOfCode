import React, {useState, useEffect} from 'react'; 

// challenge: create a another function called useCounter where we can do the same thing in both functions for reusability purposes.


export default function counterHooks() {

    const initalCount = Number(window.localStorage.getItem('count') || 0);
    const [count, setCount] = useState(initalCount); 

    const incrementCount = () => setCount(count + 1);
    
    useEffect(() => {
        window.localStorage.setItem('count', count);
    }, [])

    return <button onClick={() => setCount(incrementCount)}>{count}</button>
}


counterHooks()