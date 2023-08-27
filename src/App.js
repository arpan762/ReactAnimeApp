import React, { useState } from 'react';
import './App.css';
import { Body } from './components/Body';
import { Menu } from './components/Menu';
import { createContext } from 'react'
export const UserContext = createContext()
function App() {
  const [darkMode,setDarkMode] = useState(true)
  const [state, setState] = useState(true)
  return (
    <div className="app">
     <UserContext.Provider value={{state, setState}}>
      <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Body darkMode={darkMode} setDarkMode={setDarkMode}/>
     </UserContext.Provider>
    </div>
  );
}

export default App;
