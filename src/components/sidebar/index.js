import React from 'react';
import { Link } from 'react-router-dom';

import './index.css';

const Sidebar = () => (
    <nav className="sidebar">
        <div className="sidebar__container">
            <div className="sidebar-header__container">
                <span className="sidebar-header">Beer catalog</span>
            </div>
            <ul className="sidebar__items-list">
                <li className="sidebar__item">
                    <Link to={`/`}>
                        <i className="icon-star" />
                        Home
                    </Link>
                </li>
                <li className="sidebar__item">
                    <i className="icon-drawer" />
                    Favorites
                </li>
            </ul>
        </div>
    </nav>
)

export default Sidebar;