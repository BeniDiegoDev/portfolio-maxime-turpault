import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';

import emailjs from '@emailjs/browser';

import { FaInstagram } from 'react-icons/fa';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';
import { ImFacebook2 } from 'react-icons/im';

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import BottomBar from '../components/BottomBar';

import { ImCross } from 'react-icons/im';

function Contact(props) {

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
        <>
          <div>
            <ImCross className='Form-Success-Exit' onClick={() => setStatus('')} />
          </div>
          <div className="Form-Success">
            <p>Envoyé avec succés !</p>
          </div>
        </>
        : status === 'error' ?
          <>
            <div>
              <ImCross className='Form-Success-Exit' onClick={() => setStatus('')} />
            </div>
            <div className="Form-Success">
              <p>Echec de l'envoi</p>
            </div>
          </>
          :
          <>
          </>
      }
      <SmartBar />
      <Menu />
      <div className="Contact">
        <div className="Contact-Gauche">
          <h3><HiPhone style={{ marginRight: '5px' }} /> Téléphone : <a className="Contacts" href={"tel:"+props.profil[0].phoneNumber}>{props.profil[0].phoneNumber}</a></h3>
          <h3><HiOutlineMail style={{ marginRight: '5px' }} /> Email : <a className="Contacts" href={"mailto:"+props.profil[0].emailPro+"?subject=Contact depuis votre Portfolio 💻 - Prénom Nom - Objet de votre mail&body=N'oubliez pas de mettre votre message ⭐"}>{props.profil[0].emailPro}</a></h3>
        </div>
        <div className="Contact-Droite">
          <h3><FaInstagram style={{ marginRight: '5px' }} /> Instagram : <a className="Contacts" href={props.profil[0].instagram} target="_blank" rel="noreferrer">/maximeturpault</a></h3>
          <h3><ImFacebook2 style={{ marginRight: '5px' }} /> Facebook : <a className="Contacts" href={props.profil[0].facebook} target="_blank" rel="noreferrer">Maxime Turpault</a></h3>
        </div>
      </div>
      <div className="Contact-Form">
        <p className="Form-Info">Pour tous vos projets artistiques en studio ou en extérieur, n'hésitez pas à me contacter en remplissant ce formulaire :</p>
        <form className="Formulaire" ref={form} onSubmit={sendEmail}>
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

function mapStateToProps(state) {
  return { profil: state.profil }
}

export default connect(
  mapStateToProps,
  null
)(Contact);
