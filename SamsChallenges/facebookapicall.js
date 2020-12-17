import React, { useEffect, useState } from "react";
import "./styles.css";

export default function App() {
  const [users, setUsers] = useState([]);
  const [input, setInput] = useState(''); 

  useEffect(() => {
    fetch("https://randomuser.me/api?results=100")
      .then((resp) => resp.json())
      .then((res) => setUsers(res.results));
  }, []);


  const mapUsers = () => {
    return filterUsers().map((user) => {
      return (
        <div key={user.login.username} className="users-container">
          <img
            className="imgs"
            src={user.picture.large}
            alt={user.login.username}
          />
          <p>{user.login.username}</p>
        </div>
      );
    });
  };

 const filterUsers = () => {
   return users.filter(user => {
     return user.login.username.includes(input)
   })
 }



  return (
    <div className="App">
      <h1>Welcome to The Faceook!</h1>
      <label>Search Users</label>
      <input type='text' value={input} onChange={(e) => setInput(e.target.value)}/>
      <div className="grid">{mapUsers()}</div>
      <div></div>
    </div>
  );
}
