import React from "react";

export default function App() {
  const [player, setPlayer] = React.useState('');
  const [brand, setBrand] = React.useState('');
  const [name, setName] = React.useState('')

 return (
   <div style={{display: 'flex', flexDirection: 'column'}}> 
     <UsersName name={name} onNameChange={event => setName(event.target.value)} />
     <FavNbaPlayer player={player} onPlayerChange={event => setPlayer(event.target.value)}/>
     <FavShoeBrand brand={brand} onBrandChange={event => setBrand(event.target.value)} />
     <DisplayData brand={brand} player={player} name={name}/>
     </div>
 )
}

function UsersName({name, onNameChange}) {
  return (
    <>  
    <label htmlFor='name'>Your name: </label>
  <input type='text' id='name' value={name} onChange={onNameChange} />
    </>
  )
}

function FavNbaPlayer({player, onPlayerChange}) {
  return (
    <>
    <label htmlFor='player'>Favorite Player in the NBA: </label>
  <input type='text' id='player' value={player} onChange={onPlayerChange} />
    </>
  )
}

function FavShoeBrand({brand, onBrandChange}) {
  return (
    <> 
    <label htmlFor='brand'>Favorite Shoe: </label>
  <input type='text' id='brand' value={brand} onChange={onBrandChange} />
    </>
  )
}

function DisplayData({brand, player, name}) {
  if (brand === '' && player === '' && name === '') {
    brand = `___`
    name = `___`
    player = `___`
  }
  return (
    <div>
    {`${name}'s favorite NBA Player is ${player} and their favorite shoe brand is ${brand}.`}
      </div> 
  )
}
