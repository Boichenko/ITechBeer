import {OPEN_BEER} from './types';

const initialState = {
    beer: {}
};

const beerReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_BEER:
            return action.beer
        default:
            return state
    }
}

export default beerReducer;