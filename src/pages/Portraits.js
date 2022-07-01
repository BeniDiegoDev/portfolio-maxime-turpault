import React from 'react'

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';
import Photos from '../components/Photos';

function Portraits() {

  let photoPortraits = Photos.map((item, i) => {
    if (item.categorie === 'Portraits') {
      return (
        <img className="Portraits-Pictures" key={i} src={item.miniatures} alt={item.name} />
      )
    }
  })

  return (
    <>
      <SmartBar />
      <Menu />
      <div className='Pictures-Galerie'>
        {photoPortraits}
      </div>
      <Contacts />
      <BottomBar />
    </>
  );
}

export default Portraits;
