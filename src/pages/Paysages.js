import React from 'react'

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';

function Paysages() {

  return (
    <>
      <SmartBar />
      <Menu />
      <div className="Droite">
        <h3>Paysages</h3>
      </div>
      <Contacts />
      <BottomBar />
    </>
  );
}

export default Paysages;
