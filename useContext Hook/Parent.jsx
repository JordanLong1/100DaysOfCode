import React, {createContext} from "react";
import "./styles.css";
import ChildOne from './ChildOne'

export const NameContext = createContext();

export default function Parent({name}) {
  return (
    <div className="App">
      <NameContext.Provider value={name}>
    <ChildOne />
    </NameContext.Provider> 
    </div>
  );
}

App.defaultProps = {
  name: 'Jordan'
}
