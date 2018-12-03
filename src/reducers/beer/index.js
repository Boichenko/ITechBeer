import {CLEAN_BEER, INVALIDATE_REQUEST_BEER, REQUEST_BEER, RECEIVE_BEER} from './types';

const initialState = {
    isFetching: false,
    didInvalidate: false,
};

const beerReducer = (state = initialState, action) => {
    switch (action.type) {
        case CLEAN_BEER:
            return {};
        case INVALIDATE_REQUEST_BEER:
            return Object.assign({}, state, {
                didInvalidate: true,
                error: action.error,
            })
        case REQUEST_BEER:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
                id: action.id
            })
        case RECEIVE_BEER:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                beer: action.beer,
            })
        default:
            return state
    }
}

export default beerReducer;