import React from 'react';
import PropTypes from 'prop-types'

import './index.css';

const Header = ({ toggleVisibilitySidebar }) => (
    <header className="header">
        <div className="header__container">
            <button className="icon-menu__container" onClick={toggleVisibilitySidebar}>
                <span className="icon-menu"></span>
            </button>

            <div className="title__container">
                <h1 className="title">Beer catalog</h1>
            </div>

            <div className="settings__container">
                <span className="icon-settings"></span>
            </div>
        </div>
    </header>
)

Header.propTypes = {
    toggleVisibilitySidebar: PropTypes.func.isRequired
}

export default React.memo(Header);