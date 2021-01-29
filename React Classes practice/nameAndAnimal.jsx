import React from 'react'; 

class App extends React.Component {


  constructor(props) {
    super(props)
    this.state = {name: '', favoriteAnimal: ''}
  }

  handleChange = (e) => {

    this.setState({
      name: e.target.value
    })
  }

  handleAnimalChange = (e) => {
    this.setState({
      favoriteAnimal: e.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
        <label htmlFor='name'>Enter name:</label>
          <input type='text' id='name' value={this.state.name} onChange={this.handleChange} />
          <label htmlFor='animal'>Favorite Animal</label>
          <input type='text' id='animal' value={this.state.favoriteAnimal} onChange={this.handleAnimalChange} />
        </form>

        {this.state.favoriteAnimal !== '' ? 
        <div>
        <span>{this.state.name}'s favorite animal is a {this.state.favoriteAnimal}</span>
        </div>
          : 
          null
        }
      </div>
    )
  };
};

export default App;