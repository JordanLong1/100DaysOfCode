import React, {useState, useEffect} from "react";
import "./styles.css";

export default function App() {

  const [count, setCount] = useState(0); 
  const [breweries, setBreweries] = useState([]); 

  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1); 
  }

  const handleDecrement = () => {
    if (count > 0) {
      setCount(prevCount => prevCount - 1);
    } else {
      return;
    }
  }

  useEffect(() => {

    const fetchData = async () => {
     let response = await fetch(`	https://api.openbrewerydb.org/breweries`)
      const data = await response.json();
      setBreweries(data)

    }
    fetchData();
    return () => {
    
      console.log('clean-up time')
    }
  }, [setBreweries])

  return (
    <div className="App">
     <button onClick={handleIncrement}>increment</button>
     <span>{count}</span>
     <button onClick={handleDecrement}>decrement</button>
      {breweries.map(brewery => <li key={brewery.id}>{brewery.name}</li>)}
    </div>
  );
}
