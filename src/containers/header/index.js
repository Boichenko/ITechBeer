import React from 'react';
import './index.css';
import PropTypes from 'prop-types'

import { toggleVisibilityMenu } from '../../reducers/sidebar/actions';
import { connect } from 'react-redux';

const Header = ({ toggleVisibilityMenu }) => (
    <header className="header">
        <div className="header__container">
            <button className="icon-menu__container" onClick={toggleVisibilityMenu}>
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


//типа объявление и какие обязательно нужны пропсы можно не указывать
//это все опционально
Header.propTypes = {
    toggleVisibilityMenu: PropTypes.func.isRequired
}

Header.defaultProps = {
    toggleVisibilityMenu: () => { console.log('apple'); }
}

const mapDispatchToProps = dispatch => ({
    toggleVisibilityMenu: () => dispatch(toggleVisibilityMenu())
})

export default connect(
    null,
    mapDispatchToProps
)(Header)
