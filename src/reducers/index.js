import {combineReducers} from 'redux';

import menuReducer from './sidebar';
import dashboardReducer from './dashboard';
import beerReducer from './beer';


const rootReducer = combineReducers({menu: menuReducer, 
    dashboard: dashboardReducer, 
    beer: beerReducer
})

export default rootReducer;