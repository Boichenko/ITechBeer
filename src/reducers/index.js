import {combineReducers} from 'redux';

import sidebarReducer from './sidebar/sidebarReducer';
import dashboardReducer from './dashboard/dashboardReducer';
import filterReducer from './filter/filterReducer';
import favoritesReducer from './favorites/favoritesReducer';
import beerReducer from './beer/beerReducer';


const rootReducer = combineReducers({
        sidebar: sidebarReducer, 
        dashboard: dashboardReducer, 
        beerItem: beerReducer,
        favorites: favoritesReducer,
        filter: filterReducer
})

export default rootReducer;