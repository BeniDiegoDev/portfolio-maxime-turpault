import React from 'react'

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';
import Photos from '../components/Photos';

function Paysages() {

  let photoPaysages = Photos.map((item, i) => {
    if (item.categorie === 'Paysages') {
      return (
        <img className="Paysages-Pictures" key={i} src={item.miniatures} alt={item.name} />
      )
    }
  })

  return (
    <>
      <SmartBar />
      <Menu />
      <div className='Pictures-Galerie'>
        {photoPaysages}
      </div>
      <Contacts />
      <BottomBar />
    </>
  );
}

export default Paysages;
