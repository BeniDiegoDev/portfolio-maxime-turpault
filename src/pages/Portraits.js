import React from 'react'

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';
import PortraitsPictures from '../components/PortraitsPictures';

function Portraits() {

  return (
    <>
      <SmartBar />
      <Menu />
      <div className='Pictures-Galerie'>
        {PortraitsPictures.map((item, i) => (
          <img className="Portraits-Pictures" key={i} src={item.miniatures} alt={item.name} />
        )
        )}
      </div>
      <Contacts />
      <BottomBar />
    </>
  );
}

export default Portraits;
