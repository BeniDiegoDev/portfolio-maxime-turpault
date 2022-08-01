import React, { useState } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom';

import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

function SmartBar(props) {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className="Smart-Bar">
            <div className="Top-Menu">
                <h2 onClick={() => (setShowMenu(!showMenu))}><span className="Text-Menu">Menu</span></h2>
                {showMenu ?
                    <AiOutlineClose class='Margin-Menu-Close' onClick={() => (setShowMenu(!showMenu))}/>
                    :
                    <AiOutlineMenu class='Margin-Menu' onClick={() => (setShowMenu(!showMenu))}/>
                }
            </div>
            {showMenu ?
                <div className="Top-Smart">
                    <Link className="Item-Menu" to="/" onClick={() => (setShowMenu(false))}>Accueil</Link>
                    <Link className="Item-Menu" to="/presentation" onClick={() => (setShowMenu(false))}>Présentation</Link>
                    {props.categorie.map((item, i) => (
                        <Link className="Item-Menu" key={i} to="/galerie" onClick={() => (setShowMenu(false), props.selectedCategorie(item))}>{item}</Link>
                    )
                    )}
                    <Link className="Item-Menu" to="/contact" onClick={() => (setShowMenu(false))}>Contact</Link>

                </div>
                :
                <>
                </>
            }
            <div className="Mark-Smart">
                <Link className="Smart-Name" to="/" onClick={() => (setShowMenu(false))}><span>Maxime Turpault</span></Link>
                <Link className="Smart-Name" to="/" onClick={() => (setShowMenu(false))}><img className='Logo' src='/logomt.png' alt='logo' /></Link>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return { categorie: state.categorie }
}

function mapDispatchToProps(dispatch) {
    return {
        selectedCategorie: function (selection) {
            dispatch({
                type: 'selectedCategorie',
                selection
            })
        },
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SmartBar);