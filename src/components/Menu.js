import React from 'react'
import {Link} from 'react-router-dom';

import Categories from "./Categories";

function Menu() {

    return (
        <div>
            <div className="Mark">
                <Link className="Name" to="/">Maxime Turpault</Link><img className='Logo' src='/logomt.png' alt='logo'/>
            </div>
            <div className="Gauche">
                {Categories.map((item, i) => (
                    <Link className="Item-Menu" key={i} to={item.link}>{item.name}</Link>
                )
                )}
            </div>
        </div>
    );
}

export default Menu;