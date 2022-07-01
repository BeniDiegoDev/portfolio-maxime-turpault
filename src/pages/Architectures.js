import React from 'react'

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';
import Photos from '../components/Photos';

function Architectures() {

  let photoArchitectures = Photos.filter(item => item.categorie === 'Architectures').map((item, i) => (
    <img className="Pictures" key={i} src={item.miniatures} alt={item.name} />
  )
  )

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
