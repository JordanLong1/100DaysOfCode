import React, {useState, useEffect} from 'react'

function App() {

  const [input, setInput] = useState(''); 
  const [term, setTerm] = useState(''); 
  const [results, setResults] = useState([]); 


  const handleSubmit = (e) => {
    e.preventDefault(); 
    setTerm(input)
    setInput('')
  }

  useEffect(() => {

    const fetchGifs = async () => {
      try {
      const abortController = new AbortController(); 
      const abortSignal = {signal: abortController.signal}
      
      const response = await fetch(`https://api.giphy.com/v1/gifs/search?api_key=INSERT_YOUR_OWNq=${term}&limit=10&offset=0&rating=g&lang=en`, abortSignal)
      const data = await response.json();
      
      setResults(data.data.map(gif => gif.images.preview.mp4));
      } catch (error) {
        new Error('Something went wrong')
      }
    }
    if (term !=='') {
      fetchGifs()
    } 

    return () => {
      abortController.abort(); 
    }
  }, [term])


  return (
    <div className="App" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
      <form onSubmit={handleSubmit}>
     <input type='text' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Search for a Gif!' />
    <button type='submit'>Submit</button>
      {results.map(gif => <video autoPlay loop key={gif} src={gif} alt='' />)}
      </form>
    </div>
  );
}

export default App;
