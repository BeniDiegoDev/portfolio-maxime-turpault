import React from 'react'

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';
import AccueilPictures from '../components/AccueilPictures';

function Accueil() {

  const pictures = AccueilPictures

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
