import React from 'react'

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';
import Photos from '../components/Photos';

function Presentation() {

  let photoPresentation = Photos.filter(item => item.categorie === 'Presentation').map((item, i) => (
    <img className="Presentation-Pictures" key={i} src={item.miniatures} alt={item.name} />
  )
  )

  return (
    <>
      <SmartBar />
      <Menu />
      <div className='Presentation'>
        <div className='Presentation-Picture'>
          {photoPresentation}
          <p className='Presentation-Parcours'>
            Je suis Maxime Turpault<br />
            Photographe et retoucheur en freelance, basé en Ile de France<br />
            Étudiant à l'école des Gobelins en Bachelor photo et vidéo<br />
            </p>
        </div>
        <div className='Presentation-Desc'>
          <p className='Presentation-Text'>
            Je suis passionné d'images depuis toujours, je vous invites à découvrir mon travail sur mon portfolio.<br />
            Mes photographies ont un objectif artistique, ainsi que tous mes projets concernant l'image.
          </p>
        </div>
      </div>
      <Contacts />
      <BottomBar />
    </>
  );
}

export default Presentation;
