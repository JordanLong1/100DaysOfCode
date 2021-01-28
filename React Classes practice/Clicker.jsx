import React from 'react'; 

class Clicker extends React.Component {

    state = {count: 0}

    handleIncrement = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    handleDecremnt = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    render() {
        return (
            <div>
               <button onClick={this.handleIncrement}>Increment</button>
               {this.state.count}
               <button onClick={this.handleDecremnt}>Decrement</button>
            </div>
        )
    };
};

export default Clicker; 