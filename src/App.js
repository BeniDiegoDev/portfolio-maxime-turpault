import React, { useState } from 'react'
import './App.css';

function App() {
  
  const [showMenu, setShowMenu] = useState(false)

  return (
    <>
      <div className="Top-Menu">
        <h2 onClick={() => (setShowMenu(!showMenu))}>Menu</h2>
      </div>
      <div className="Top">
        <h1>Maxime Turpault</h1>
      </div>
      <div className="Gauche">
        <h2>Accueil</h2>
        <h2>Portrait</h2>
        <h2>Paysage</h2>
        <h2>Biographie</h2>
        <h2>Contact</h2>
      </div>
      <div className="Droite">
        <h2>Photo</h2>
      </div>
      <div className="Bottom">
        <h2>Contact</h2>
      </div>
    </>
  );
}

export default App;
