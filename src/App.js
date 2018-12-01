import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import Dashboard from './components/dashboard/index';
import Header from './components/header/index';
import Sidebar from './components/sidebar/index';

import BeerData from './components/beer-data/index';


import { toggleVisibilityMenu } from './reducers/sidebar/actions';

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
      {/* <Dashboard/> */}
      <BeerData/>
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