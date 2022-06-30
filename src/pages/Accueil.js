import React from 'react'

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';

function Home() {

  return (
    <>
      <SmartBar />
      <Menu />
      <div className="Droite">
        <h3>Accueil</h3>
      </div>
      <Contacts />
      <BottomBar />
    </>
  );
}

export default Home;
