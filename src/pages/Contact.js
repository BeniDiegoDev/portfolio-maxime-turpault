import React from 'react'

import SmartBar from "../components/SmartBar";
import Menu from "../components/Menu";
import Contacts from "../components/Contacts"

function Contact() {

  return (
    <>
      <SmartBar />
      <Menu />
      <div className="Droite">
        <h3>Contact</h3>
      </div>
      <Contacts />
    </>
  );
}

export default Contact;
