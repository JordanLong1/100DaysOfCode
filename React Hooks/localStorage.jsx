

import * as React from 'react'

function Greeting({initialName = ''}) {

  console.log('rendering greeting')
  const [name, setName] = React.useState(() => window.localStorage.getItem('name') || initialName)


  React.useEffect(() => {
    console.log('useEffect is running')
    window.localStorage.setItem('name', name)
  }, [name])

  function handleChange(event) {
    console.log('hello')
    setName(event.target.value)
  }
  return (
    <div>
      <form>
        <label htmlFor="name">Name: </label>
        <input value={name} onChange={handleChange} id="name" />

      </form>
      {name ? <strong>Hello {name}</strong> : 'Please type your name'}
    </div>
  )
}

function App() {
  const [count, setCount] = React.useState(0)
  return <> <button onClick={() => setCount(prevCount => prevCount + 1)}>{count}</button><Greeting /> </>
}

export default App
