import React from 'react'

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';
import PaysagesPictures from '../components/PaysagesPictures';

function Paysages() {

  return (
    <>
      <SmartBar />
      <Menu />
      <div className='Pictures-Galerie'>
        {PaysagesPictures.map((item, i) => (
          <img className="Paysages-Pictures" key={i} src={item.miniatures} alt={item.name} />
        )
        )}
      </div>
      <Contacts />
      <BottomBar />
    </>
  );
}

export default Paysages;
