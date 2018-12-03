import React from 'react';
import {Provider} from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PropTypes from 'prop-types'

import App from './App';
import BeerDetails from './beer-details';

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/" component={App} />
                <Route path="/:beerId?" component={BeerDetails} />
            </div>
        </Router>
    </Provider>
)

Root.propTypes = {
    store: PropTypes.object.isRequired,
};

export default Root;