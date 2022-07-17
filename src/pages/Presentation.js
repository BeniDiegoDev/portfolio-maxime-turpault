import React from 'react'
import { connect } from 'react-redux';

import SmartBar from '../components/SmartBar';
import Menu from '../components/Menu';
import Contacts from '../components/Contacts'
import BottomBar from '../components/BottomBar';

function Presentation(props) {

  return (
    <>
      <SmartBar />
      <Menu />
      <div className='Presentation'>
        <div className='Presentation-Picture'>
          <img className="Presentation-Pictures" src={props.presentation[0].photo} alt="Maxime Turpault" />
          <p className='Presentation-Parcours'>
            {props.presentation[0].presentation}
            </p>
        </div>
        <div className='Presentation-Desc'>
          <p className='Presentation-Text'>
            {props.presentation[0].description}
          </p>
        </div>
      </div>
      <Contacts />
      <BottomBar />
    </>
  );
}

function mapStateToProps(state) {
  return { presentation: state.presentation }
}

export default connect(
  mapStateToProps,
  null
)(Presentation);
