import React from 'react';
import { NavLink } from 'react-router-dom';

const Menu = () => {
    const activeNavStyle = {
        fontSize: '1.5rem',
        fontWeight: 'bold',
        color: '#ff0000'
    };
    return (
        <div>
            <ul>
                <li>
                    <NavLink exact to="/" activeStyle={activeNavStyle}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to="/about" activeStyle={activeNavStyle}>
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about/Wabi" activeStyle={activeNavStyle}>
                        About Wabi
                    </NavLink>
                </li>
            </ul>
            <hr />
        </div>
    );
};

export default Menu;
