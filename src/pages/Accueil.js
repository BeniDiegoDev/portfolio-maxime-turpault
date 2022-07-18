import React, { useEffect } from 'react'
import { connect } from 'react-redux';

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';

function Accueil(props) {

  useEffect(() => {
    async function loadPhotos() {
      var photoBdd = await fetch(`https://backofficemaxime.herokuapp.com/profil/recupphoto`);
      var photo = await photoBdd.json();
      props.addPhoto(photo.photos);
    }
    loadPhotos();
    async function loadPresentation() {
      var presetationBdd = await fetch(`https://backofficemaxime.herokuapp.com/profil/recuppresentation`);
      var presentation = await presetationBdd.json();
      props.addPresentation(presentation.presentation);
    }
    loadPresentation();
    async function loadProfil() {
      var profilBdd = await fetch(`https://backofficemaxime.herokuapp.com/profil/recupprofil`);
      var profil = await profilBdd.json();
      props.addProfil(profil.profil);
    }
    loadProfil();
  }, []);

  let photoAleatoire = props.photos[Math.floor(Math.random(props.photos.length) * props.photos.length)]

  return (
    <>
      <SmartBar />
      <Menu />
      <div className="Accueil">
        {photoAleatoire === undefined ?
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
    },
    addPresentation: function (presentation) {
      dispatch({
        type: 'addPresentation',
        presentation
      })
    },
    addProfil: function (profil) {
      dispatch({
        type: 'addProfil',
        profil
      })
    }
  }

}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Accueil);