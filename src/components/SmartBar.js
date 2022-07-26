import React, { useState } from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom';

function SmartBar(props) {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className="Smart-Bar">
            <div className="Top-Menu">
                <h2 onClick={() => (setShowMenu(!showMenu))}><span className="Text-Menu">Menu</span></h2>
            </div>
            {showMenu ?
                <div className="Top-Smart">
                    <Link className="Item-Menu" to="/">Accueil</Link>
                    <Link className="Item-Menu" to="/presentation">Présentation</Link>
                    {props.categorie.map((item, i) => (
                        <Link className="Item-Menu" key={i} to="/galerie" onClick={() => (console.log(item), props.selectedCategorie(item))}>{item}</Link>
                    )
                    )}
                    <Link className="Item-Menu" to="/contact">Contact</Link>

                </div>
                :
                <>
                </>
            }
            <div className="Mark-Smart">
                <Link className="Smart-Name" to="/">Maxime Turpault</Link>
                <Link className="Smart-Name" to="/"><img className='Logo' src='/logomt.png' alt='logo' /></Link>
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