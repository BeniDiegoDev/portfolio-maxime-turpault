import React from 'react'

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';
import ArchitecturesPictures from '../components/ArchitecturesPictures';

function Architectures() {

  return (
    <>
      <SmartBar />
      <Menu />
      <div className='Pictures-Galerie'>
        {ArchitecturesPictures.map((item, i) => (
          <img className="Architectures-Pictures" key={i} src={item.miniatures} alt={item.name} />
        )
        )}
      </div>
      <Contacts />
      <BottomBar />
    </>
  );
}

export default Architectures;
