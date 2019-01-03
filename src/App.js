import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types'

import './App.css';
import Dashboard from './containers/dashboard';
import Header from './containers/header';
import Sidebar from './components/sidebar';
import BeerDetails from './containers/beer-details';
import Favorites from './containers/favorites';

import { toggleVisibilitySidebar } from './actions/sidebar';

const App = ({ sideBarVisible, toggleVisibilitySidebar }) => {
  let menu;

  const handleClick = (e) => {
    if (sideBarVisible && !menu.contains(e.target)) {
      return toggleVisibilitySidebar();
    }
  }

  return (
    <Router>
      <div className="App" onClick={handleClick} >
        {sideBarVisible &&
          <div className='sidebar__container' ref={node => menu = node}>
            <Sidebar />
          </div>
        }
        <Header />

        <Route path="/beer/:beerId" component={BeerDetails} />
        <Route exact path="/" component={Dashboard} />
        <Route exact path="/favorites" component={Favorites} />
      </div>
    </Router>
  )
}

App.propTypes = {
  toggleVisibilitySidebar: PropTypes.func.isRequired,
  sideBarVisible: PropTypes.bool.isRequired
}

const mapStateToProps = state => ({
  sideBarVisible: state.sidebar.get('isVisible')
})

const mapDispatchToProps = dispatch => ({
  toggleVisibilitySidebar: () => dispatch(toggleVisibilitySidebar())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)