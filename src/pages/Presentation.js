import React from 'react'

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';

function Presentation() {

  return (
    <>
      <SmartBar />
      <Menu />
      <div className="Droite">
        <h3>Presentation</h3>
      </div>
      <Contacts />
      <BottomBar />
    </>
  );
}

export default Presentation;
