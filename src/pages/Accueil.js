import React from 'react'

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';
import Photos from '../components/Photos';

function Accueil() {

  const pictures = Photos

  let viewPict = pictures[Math.floor(Math.random(pictures.length) * pictures.length)]

  return (
    <>
      <SmartBar />
      <Menu />
      <div className="Accueil">
          <img className="Accueil-Pictures" src={viewPict.miniatures} alt={viewPict.name} />
        </div>
      <Contacts />
      <BottomBar />
    </>
  );
}

export default Accueil;
