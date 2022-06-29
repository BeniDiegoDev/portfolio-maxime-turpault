import React from 'react'
import {Link} from 'react-router-dom';

import Categories from "./Categories";

function Menu() {

    return (
        <div>
            <div className="Mark">
                <h1>Maxime Turpault</h1>
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