import React from 'react'

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';
import Photos from '../components/Photos';

function Architectures() {

  let photoArchitectures = Photos.map((item, i) => {
    if (item.categorie === 'Architectures') {
      return (
        <img className="Architectures-Pictures" key={i} src={item.miniatures} alt={item.name} />
      )
    }
  })

  return (
    <>
      <SmartBar />
      <Menu />
      <div className='Pictures-Galerie'>
        {photoArchitectures}
      </div>
      <Contacts />
      <BottomBar />
    </>
  );
}

export default Architectures;
