import React, {useState} from "react";
import "./styles.css";

export default function App() {

  const [todo, setTodo] = useState([]); 
  const [input, setInput] = useState(''); 

  const handleSubmit = (e) => {
    e.preventDefault(); 

    let todos = [...todo]

    todos.push(input)

    setTodo(todos)

  }

  const handleChange = (e) => {
    let inputVal = e.target.value; 

    setInput(inputVal); 


  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor='input'>Enter Todo</label>
      <input id='input' type='text' value={input} onChange={handleChange} /> 

      <div>
       {todo.map((item, index) => <li style={{listStyle: 'none'}} key={index}>{index + 1}. {item}</li>)} 
       </div> 

       </form>
    </div>
  );
}
