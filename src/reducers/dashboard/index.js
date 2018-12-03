import {
    REQUEST_BEERS,
    INVALIDATE_REQUEST_BEERS,
    RECEIVE_BEERS,
} from './types';

const initialState = {
    beers: []
};

const beers = (state = {
    isFetching: false,
    didInvalidate: false,
    beers: [],
    currentPage: 0
}, action) => {
    switch (action.type) {
        case INVALIDATE_REQUEST_BEERS:
            return Object.assign({}, state, {
                didInvalidate: true,
                error: action.error,
                currentPage: --action.currentPage
            })
        case REQUEST_BEERS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
                currentPage: action.currentPage
            })
        case RECEIVE_BEERS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                beers: state.beers.concat(action.beers),
                currentPage: action.currentPage
            })
        default:
            return state
    }
}

const dashboardReducer = (state = initialState, action) => {
    switch (action.type) {
        case INVALIDATE_REQUEST_BEERS:
        case RECEIVE_BEERS:
        case REQUEST_BEERS:
            return Object.assign({}, beers(state, action))
        default:
            return state
    }
}

export default dashboardReducer;