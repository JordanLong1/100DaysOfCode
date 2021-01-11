

import * as React from 'react'

function useLocalStorageState(key, initialName) {
  const [name, setName] = React.useState(() => window.localStorage.getItem(key) || initialName)
  
  
  React.useEffect(() => {
    window.localStorage.setItem(key, name)
  }, [name, key])

  return [name, setName]

}


function Greeting({initialName}) {

  const [name, setName] = useLocalStorageState('name', initialName) // -> 'name' is the key arg, initalName = Kent from App in the useLocalStorage hook
  

  function handleChange(event) {
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
  return <Greeting initialName='Kent'/>
}

export default App
