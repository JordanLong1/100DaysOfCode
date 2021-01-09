import * as React from 'react'

function UsernameForm({onSubmitUsername}) {

  // const inputElement = useRef(null)
  const [username, setUsername] = React.useState('')


  const handleSubmit = (e) => {
    e.preventDefault(); // preventedDefault behavoir of refresh & triggering get request.
      onSubmitUsername(e.target.elements[0].value) // passed the onSubmitUsername function the value that was typed in the form. 
      // let inputVal = inputElement.current.value //.current.value is giving me the the value from the input by making use of a ref on the input element.
      // onSubmitUsername(inputVal)
  }

  const handleChange = (e) => {
    let inputValue = e.target.value; 

    // const isValid = inputValue === inputValue.toLowerCase(); 

    setUsername(inputValue)
    
  }
 
  return (

    <form onSubmit={handleSubmit}> 
      <div>
        <label htmlFor='username'>Username:</label> 
        <input type="text" id='username' value={username.toLowerCase()} onChange={handleChange} />
      </div>
      {/* <div className='container'>{error}</div> */}
      <button type='submit'>Submit</button>
    </form>
  )
}

function App() {
  const onSubmitUsername = username => alert(`You entered: ${username}`)
  return <UsernameForm onSubmitUsername={onSubmitUsername} />
}

export default App
