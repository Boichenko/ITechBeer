import React from 'react';
import { connect } from 'react-redux';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './components/dashboard/index';
import Header from './components/header/index';
import Sidebar from './components/sidebar/index';
import BeerDetails from './components/beer-details';

import { toggleVisibilityMenu } from './reducers/sidebar/actions';

const App = ({ sideBarVisible, toggleVisibilityMenu }) => {
  let menu;

  const handleClick = (e) => {
    return !sideBarVisible || menu.contains(e.target) 
      ? null 
      : toggleVisibilityMenu();
  }

  return (
    <Router>
      <div className="App" onClick={handleClick} >
        <div className={sideBarVisible ? '' : 'hidden'} ref={node => menu = node}>
          <Sidebar />
        </div>
        <Header />

        <Route exact path="/" component={Dashboard} />
        <Route path="/:beerId?" component={() => <BeerDetails />} />
      </div>
    </Router>
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