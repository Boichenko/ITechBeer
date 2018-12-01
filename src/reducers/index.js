import menuReducer from './sidebar';
import {combineReducers} from 'redux';

const rootReducer = combineReducers({menu: menuReducer})

export default rootReducer;