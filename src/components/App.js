import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import Dashboard from './dashboard/index';
import Header from './header/index';
import Sidebar from './sidebar/index';

import { toggleVisibilityMenu } from '../reducers/sidebar/actions';

const App = ({ sideBarVisible, toggleVisibilityMenu }) => {
  let menu;

  const handleClick = (e) => {
    return !sideBarVisible || menu.contains(e.target) 
      ? null 
      : toggleVisibilityMenu();
  }

  return (
    <div className="App" onClick={handleClick} >
      <div className={sideBarVisible ? '' : 'hidden'} ref={node => menu = node}>
        <Sidebar />
      </div>
      <Header />
      <Dashboard />
    </div>
  )
}


const mapStateToProps = state => ({
  sideBarVisible: state.menu.visible
})

const mapDispatchToProps = dispatch => ({
  toggleVisibilityMenu: () => dispatch(toggleVisibilityMenu())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)