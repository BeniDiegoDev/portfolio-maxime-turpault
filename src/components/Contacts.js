import React from 'react'

import { FaInstagram } from 'react-icons/fa';
import { HiOutlineMail, HiPhone } from 'react-icons/hi';
import { ImFacebook2 } from 'react-icons/im';

function Contacts() {

    return (
        <div className="Bottom">
            <a className="Contact-Logo" href="mailto:maxime.turpault92@gmail.com?subject=Contact depuis votre Portfolio 💻 - Prénom Nom - Objet de votre mail&body=N'oubliez pas de mettre votre message ⭐"><HiOutlineMail /></a>
            <a className="Contact-Logo" href="tel:+33770102320"><HiPhone /></a>
            <a className="Contact-Logo" href='https://www.facebook.com/profile.php?id=100012629315440' target="_blank" rel="noreferrer"><ImFacebook2 /></a>
            <a className="Contact-Logo" href='https://www.instagram.com/maximeturpault/' target="_blank" rel="noreferrer"><FaInstagram /></a>
        </div>
    );
}

export default Contacts;