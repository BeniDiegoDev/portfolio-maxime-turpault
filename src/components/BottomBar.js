import React from "react";

import { TbWorld } from 'react-icons/tb';
import { FaLinkedin } from 'react-icons/fa';

export default function BottomBar() {
    return (
        <div className="Bottom-B">
        <div className="Bottom-Bar">
            <p className="BottomL">Créé par Benjamin D'ONOFRIO</p>
            <p className="BottomM">Copyright © 2022 BD.js</p>
            <div className="BottomR">
                <a className="Contact-Bottom" href="https://www.benit.fr" target="_blank" rel="noreferrer"><TbWorld /></a>
                <a className="Contact-Bottom" href="https://www.linkedin.com/in/benjamin-d-onofrio-0850b5238/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
            </div>
        </div>
        </div>
    );
}
