import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import { FaInstagram } from 'react-icons/fa';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';
import { ImFacebook2 } from 'react-icons/im';

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import BottomBar from '../components/BottomBar';

function Contact() {

  const [status, setStatus] = useState('');

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_y9l5w4i', 'template_zw64o3s', form.current, 'oR8C9eyUmiYFgWCQt')
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
          setStatus('success');
        },
        (error) => {
          console.log(error.text);
          setStatus('error');
        });
  };

  return (
    <>
      {status === 'success' ?
        <div className="Form-Success">
          <p>Envoyé avec succés !</p>
            <p className='Form-Success-Exit' onClick={() => setStatus('')}>Fermer</p>
        </div>
        : status === 'error' ?
          <div className="Form-Success">
            <p>Echec de l'envoi</p>
            <p className='Form-Success-Exit' onClick={() => setStatus('')}>Réessayer</p>
          </div>
          :
          <>
          </>
      }
      <SmartBar />
      <Menu />
      <div className="Contact">
        <div className="Contact-Gauche">
          <h3><HiPhone style={{ marginRight: '5px' }} /> Téléphone : <a className="Contacts" href="tel:+33770102320">+33770102320</a></h3>
          <h3><HiOutlineMail style={{ marginRight: '5px' }} /> Email : <a className="Contacts" href="mailto:maxime.turpault92@gmail.com?subject=Contact depuis votre Portfolio 💻 - Prénom Nom - Objet de votre mail&body=N'oubliez pas de mettre votre message ⭐">maxime.turpault92@gmail.com</a></h3>
        </div>
        <div className="Contact-Droite">
          <h3><FaInstagram style={{ marginRight: '5px' }} /> Instagram : <a className="Contacts" href='https://www.instagram.com/maximeturpault/' target="_blank" rel="noreferrer">/maximeturpault</a></h3>
          <h3><ImFacebook2 style={{ marginRight: '5px' }} /> Facebook : <a className="Contacts" href='https://www.facebook.com/profile.php?id=100012629315440' target="_blank" rel="noreferrer">Maxime Turpault</a></h3>
        </div>
      </div>
      <div className="Contact-Form">
        <form ref={form} onSubmit={sendEmail}>
          <div className="Form-Group">
            <label className="Form-Label" >Prénom :</label>
            <input type="text" className="Form-Input" name="firstname" placeholder="Prénom" required />
          </div>
          <div className="Form-Group">
            <label className="Form-Label" >Nom :</label>
            <input type="text" className="Form-Input" name="lastname" placeholder="Nom" required />
          </div>
          <div className="Form-Group">
            <label className="Form-Label" >Adresse mail :</label>
            <input type="email" className="Form-Input" name="email" placeholder="Adresse mail" required />
          </div>
          <div className="Form-Group">
            <label className="Form-Label" >Numéro de téléphone :</label>
            <input type="phone" className="Form-Input" name="phone" placeholder="Numéro de téléphone" required />
          </div>
          <div className="Form-Group">
            <label className="Form-Label" >Objet :</label>
            <input type="text" className="Form-Input" name="objet" placeholder="Objet" required />
          </div>
          <div className="Form-Group">
            <label className="Form-Label" >Votre message :</label>
            <textarea className="Form-Text" name="message" placeholder="Votre message de contact" required />
          </div>
          <div className="Form-Button">
            <button className="Button" type="submit">Envoyer</button>
          </div>
        </form>
      </div>
      <BottomBar />
    </>
  );
}

export default Contact;
