import React from 'react'

import SmartBar from "../components/SmartBar";
import Menu from "../components/Menu";
import Contacts from "../components/Contacts"

function Paysages() {

  return (
    <>
      <SmartBar />
      <Menu />
      <div className="Droite">
        <h3>Paysages</h3>
      </div>
      <Contacts />
    </>
  );
}

export default Paysages;
