import React, { useState } from 'react'
import {Link} from 'react-router-dom';

import Categories from "./Categories";

function SmartBar() {

    const [showMenu, setShowMenu] = useState(false)

    return (
        <div className="Smart-Bar">
            <div className="Top-Menu">
                <h2 onClick={() => (setShowMenu(!showMenu))}><span  className="Text-Menu">Menu</span></h2>
            </div>
            {showMenu ?
                <div className="Top-Smart">
                    {Categories.map((item, i) => (
                        <Link className="Item-Smart" key={i} to={item.link}>{item.name}</Link>
                    )
                    )}
                </div>
                :
                <>
                </>
            }
            <div className="Mark-Smart">
                <Link className="Smart-Name" to="/">Maxime Turpault</Link><img className='Logo' src='./logomt.png' alt='logo'/>
            </div>
        </div>
    );
}

export default SmartBar;