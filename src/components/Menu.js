import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom';

function Menu(props) {

    return (
        <div>
            <div className="Mark">
                <Link className="Name" to="/">Maxime Turpault</Link>
            </div>
            <div className="Mark-Logo">
                <Link className="Name" to="/"><img className='Logo' src='/logomt.png' alt='logo' /></Link>
            </div>
            <div className="Gauche">
                <Link className="Item-Menu" to="/">Accueil</Link>
                <Link className="Item-Menu" to="/presentation">Présentation</Link>
                {props.categorie.map((item, i) => (
                    <Link className="Item-Menu" key={i} to="/galerie" onClick={() => (props.selectedCategorie(item))}>{item}</Link>
                )
                )}
                <Link className="Item-Menu" to="/contact">Contact</Link>
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
)(Menu);