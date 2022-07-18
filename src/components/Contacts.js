import React from 'react'
import { connect } from 'react-redux'

import { FaInstagram } from 'react-icons/fa';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';
import { ImFacebook2 } from 'react-icons/im';

function Contacts(props) {

    return (
        <>
        {props.profil[0] === undefined ?
            <>
            </>
            :
        <div className="Bottom">
            <a className="Contact-Logo" href={"mailto:"+props.profil[0].emailPro+"?subject=Contact depuis votre Portfolio 💻 - Prénom Nom - Objet de votre mail&body=N'oubliez pas de mettre votre message ⭐"}><HiOutlineMail /></a>
            <a className="Contact-Logo" href={"tel:"+props.profil[0].phoneNumber}><HiPhone /></a>
            <a className="Contact-Logo" href={props.profil[0].facebook} target="_blank" rel="noreferrer"><ImFacebook2 /></a>
            <a className="Contact-Logo" href={props.profil[0].instagram} target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
        }
        </>
    );
}

function mapStateToProps(state) {
    return { profil: state.profil }
  }
  
  export default connect(
    mapStateToProps,
    null
  )(Contacts);
  