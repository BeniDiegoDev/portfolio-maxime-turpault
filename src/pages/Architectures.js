import React, { useState } from 'react'

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';
import Photos from '../components/Photos';

import { ImCross } from 'react-icons/im';

function Architectures() {

  const [bigPicture, setBigPicture] = useState('');
  const [name, setName] = useState('');

  let photos = Photos.filter(item => item.categorie === 'Architectures').map((item, i) => (
    <img className="Pictures" key={i} src={item.miniatures} alt={item.name} onClick={() => (setBigPicture(item.miniatures), setName(item.name))} />
  )
  )

  return (
    <>
    {bigPicture !== '' ?
      <>
        <div>
          <ImCross className='BigPictures-Exit' onClick={() => setBigPicture('')} />
        </div>
        <div className='BigPicture' onClick={() => setBigPicture('')}>
          <img className='BigPictures' src={bigPicture} alt={name} onClick={() => setBigPicture('')} />
        </div>
      </>
      :
        <>
        </>
      }
      <SmartBar />
      <Menu />
      <div className='Pictures-Galerie'>
        {photos}
      </div>
      <Contacts />
      <BottomBar />
    </>
  );
}

export default Architectures;
