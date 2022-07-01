import React from 'react'

import { FaInstagram } from 'react-icons/fa';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';
import { ImFacebook2 } from 'react-icons/im';

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
// import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';

function Contact() {

  return (
    <>
      <SmartBar />
      <Menu />
      <div className="Contact">
        <div className="Contact-Gauche">
          <h3><HiPhone style={{marginRight: '5px'}} /> Téléphone : <a className="Contacts" href="tel:+33770102320">+33770102320</a></h3>
          <h3><HiOutlineMail style={{marginRight: '5px'}} /> Email : <a className="Contacts" href="mailto:maxime.turpault92@gmail.com?subject=Contact depuis votre Portfolio 💻 - Prénom Nom - Objet de votre mail&body=N'oubliez pas de mettre votre message ⭐">maxime.turpault92@gmail.com</a></h3>
        </div>
        <div className="Contact-Droite">
          <h3><FaInstagram style={{marginRight: '5px'}} /> Instagram : <a className="Contacts" href='https://www.instagram.com/maximeturpault/' target="_blank" rel="noreferrer">/maximeturpault</a></h3>
          <h3><ImFacebook2 style={{marginRight: '5px'}} /> Facebook : <a className="Contacts" href='https://www.facebook.com/profile.php?id=100012629315440' target="_blank" rel="noreferrer">Maxime Turpault</a></h3>
        </div>
      </div>
      {/* <Contacts /> */}
      <BottomBar />
    </>
  );
}

export default Contact;
