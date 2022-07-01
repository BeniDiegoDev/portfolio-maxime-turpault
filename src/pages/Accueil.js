import React from 'react'

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';

function Accueil() {

  return (
    <>
      <SmartBar />
      <Menu />
      <div className="Accueil">
          <img className="Accueil-Pictures" src='https://res.cloudinary.com/dktfcexev/image/upload/v1656697225/Portfolio%20Maxime%20Turpault/Paysages/Miniatures/Mar%C3%A9e_basse_fuhqrz.jpg' alt='name' />
      </div>
      <Contacts />
      <BottomBar />
    </>
  );
}

export default Accueil;
