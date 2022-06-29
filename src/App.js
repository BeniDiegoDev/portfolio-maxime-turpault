import React, { useState } from 'react'
import './App.css';

function App() {

  const [showMenu, setShowMenu] = useState(false)

  const Categories = [
    { name: 'Accueil' },
    { name: 'Présentation' },
    { name: 'Architectures' },
    { name: 'Paysages' },
    { name: 'Portraits' },
    { name: 'Contact' },
  ]

  return (
    <>
      <div className="Smart-Bar">
        <div className="Top-Menu">
          <h2 onClick={() => (setShowMenu(!showMenu))}>Menu</h2>
        </div>
        {showMenu ?
          <div className="Top-Smart">
            {Categories.map((item, i) => (
              <h3>{item.name}</h3>
            )
            )}
          </div>
          :
          <>
          </>
        }
        <div className="Mark-Smart">
          <h1>Maxime Turpault</h1>
        </div>
      </div>
      <div className="Mark">
        <h1>Maxime Turpault</h1>
      </div>
      <div className="Gauche">
        {Categories.map((item, i) => (
          <h3>{item.name}</h3>
        )
        )}
      </div>
      <div className="Droite">
        <h3>Photo</h3>
      </div>
      <div className="Droite">
        <h3>Photo2</h3>
      </div>
      <div className="Bottom">
        <h2>Contact</h2>
      </div>
    </>
  );
}

export default App;
