import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux';

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';

function Accueil(props) {

  const [photos, setPhotos] = useState([])

  useEffect(() => {
    async function loadData() {
      var photoBdd = await fetch(`https://backofficemaxime.herokuapp.com/profil/recupphoto`);
      var photo = await photoBdd.json();
      props.addPhoto(photo.photos);
      setPhotos(photo.photos);
    }
    loadData();
  }, []);

  let photoAleatoire = photos[Math.floor(Math.random(photos.length) * photos.length)]

  return (
    <>
      <SmartBar />
      <Menu />
      <div className="Accueil">
        {photoAleatoire == undefined ?
          <>
          </>
          :
          <img className="Accueil-Pictures" src={photoAleatoire.miniatures} alt={photoAleatoire.name} />
        }
      </div>
      <Contacts />
      <BottomBar />
    </>
  );
}

function mapStateToProps(state) {
  return { photos: state.photos }
}

function mapDispatchToProps(dispatch) {
  return {
    addPhoto: function (photos) {
      dispatch({
        type: 'addPhoto',
        photos
      })
    }
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accueil);