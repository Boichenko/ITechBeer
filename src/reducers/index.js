import {combineReducers} from 'redux';

import menuReducer from './sidebar';
import dashboardReducer from './dashboard';
import beerReducer from './beer';
import favoritesReducer from './favorites';


const rootReducer = combineReducers({
        menu: menuReducer, 
        dashboard: dashboardReducer, 
        beerItem: beerReducer,
        favorites: favoritesReducer
})

export default rootReducer;