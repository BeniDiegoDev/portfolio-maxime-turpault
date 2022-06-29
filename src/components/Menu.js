import React from 'react'
import '../App.css';

import Categories from "./Categories";

function Menu() {

    return (
        <div>
            <div className="Mark">
                <h1>Maxime Turpault</h1>
            </div>
            <div className="Gauche">
                {Categories.map((item, i) => (
                    <h3>{item.name}</h3>
                )
                )}
            </div>
        </div>
    );
}

export default Menu;