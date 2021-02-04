import "./styles.css";
import React, {useState} from 'react'
 function App() {

  const [name, setName] = React.useState(''); 
  const [favoriteFood, setFavoriteFood] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault(); 

    setName(e.target.value); 
    setFavoriteFood(e.target.value)

  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name: </label>
      <input type='text' id='name' value={name} onChange={(e) => setName(e.target.value)} />
      <label htmlFor='food'>Favorite food </label>
      <input type='text' id='food' value={favoriteFood} onChange={(e) => setFavoriteFood(e.target.value)} />
        </form>
        {favoriteFood !== '' ? 
        <div>
        {name}'s favorite food is {favoriteFood}
          </div>
        : null
      }
    </div>
  );
}

export default App;