import React from 'react';
import './index.css';

const Sidebar = () => (
    <nav className="sidebar">
        <div className="sidebar__container">
            <div className="sidebar-header__container">

                <span className="sidebar-header">Beer catalog</span>
            </div>
            <ul className="sidebar__items-list">
                <li className="sidebar__item">
                    <i className="icon-star" />
                    Home
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