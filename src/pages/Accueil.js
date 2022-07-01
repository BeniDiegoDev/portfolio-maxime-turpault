import React from 'react'

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';
import Photos from '../components/Photos';

function Accueil() {

  let photoAleatoire = Photos[Math.floor(Math.random(Photos.length) * Photos.length)]

  return (
    <>
      <SmartBar />
      <Menu />
      <div className="Accueil">
          <img className="Accueil-Pictures" src={photoAleatoire.miniatures} alt={photoAleatoire.name} />
        </div>
      <Contacts />
      <BottomBar />
    </>
  );
}

export default Accueil;
