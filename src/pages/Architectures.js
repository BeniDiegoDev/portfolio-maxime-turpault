import React, { useState } from 'react'
import { connect } from 'react-redux';

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';

import { ImCross } from 'react-icons/im';

function Architectures(props) {

  const [bigPicture, setBigPicture] = useState('');
  const [name, setName] = useState('');

  let photos = props.photos.filter(item => item.categorie === 'Architectures').map((item, i) => (
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

function mapStateToProps(state) {
  return { photos: state.photos }
}

export default connect(
  mapStateToProps,
  null
)(Architectures);
