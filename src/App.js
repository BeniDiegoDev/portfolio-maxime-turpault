import React from 'react'
import './App.css';

import SmartBar from "./components/SmartBar";
import Menu from "./components/Menu";
import Contact from "./components/Contact"

function App() {

  return (
    <>
      <SmartBar />
      <Menu />
      <div className="Droite">
        <h3>Photo</h3>
      </div>
      <Contact />
    </>
  );
}

export default App;
