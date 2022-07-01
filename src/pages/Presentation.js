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
          <p className='Presentation-Parcours'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non illo nobis consectetur vel repellat, necessitatibus nihil praesentium, aperiam iure ratione unde a cupiditate atque nostrum esse mollitia? Repellat, fuga consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non illo nobis consectetur vel repellat, necessitatibus nihil praesentium, aperiam iure ratione unde a cupiditate atque nostrum esse mollitia? Repellat, fuga consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        </div>
        <div className='Presentation-Desc'>
          <p className='Presentation-Text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non illo nobis consectetur vel repellat, necessitatibus nihil praesentium, aperiam iure ratione unde a cupiditate atque nostrum esse mollitia? Repellat, fuga consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non illo nobis consectetur vel repellat, necessitatibus nihil praesentium, aperiam iure ratione unde a cupiditate atque nostrum esse mollitia? Repellat, fuga consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non illo nobis consectetur vel repellat, necessitatibus nihil praesentium, aperiam iure ratione unde a cupiditate atque nostrum esse mollitia? Repellat, fuga consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non illo nobis consectetur vel repellat, necessitatibus nihil praesentium, aperiam iure ratione unde a cupiditate atque nostrum esse mollitia? Repellat, fuga consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non illo nobis consectetur vel repellat, necessitatibus nihil praesentium, aperiam iure ratione unde a cupiditate atque nostrum esse mollitia? Repellat, fuga consequuntur. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non illo nobis consectetur vel repellat, necessitatibus nihil praesentium, aperiam iure ratione unde a cupiditate atque nostrum esse mollitia? Repellat, fuga consequuntur.</p>
        </div>
      </div>
      <Contacts />
      <BottomBar />
    </>
  );
}

export default Presentation;
