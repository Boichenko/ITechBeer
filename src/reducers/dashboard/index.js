import {
    REQUEST_BEERS,
    INVALIDATE_REQUEST_BEERS,
    RECEIVE_BEERS,
    SEARCH_RECEIVE_BEERS,
    SEARCH_REQUEST_BEERS,
    INVALIDATE_SEARCH_BEERS,
} from './types';

const initialState = {
    isFetching: false,
    didInvalidate: false,
    beers: [],
    currentPage: 0,
    name: ''
}
const beers = (state = initialState, action) => {
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
                currentPage: action.currentPage,
                isSearched: false
            })
        case RECEIVE_BEERS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                beers: state.beers.concat(action.beers),
                currentPage: action.currentPage
            })
        case INVALIDATE_SEARCH_BEERS:
            return Object.assign({}, state, {
                didInvalidate: true,
                error: action.error,
                name: action.searchName
            })
        case SEARCH_REQUEST_BEERS:
            return Object.assign({}, state, {
                isFetching: true,
                didInvalidate: false,
                name: action.searchName
            })
        case SEARCH_RECEIVE_BEERS:
            return Object.assign({}, state, {
                isFetching: false,
                didInvalidate: false,
                isSearched: action.isSearched,
                beers: action.beers,
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
        case SEARCH_RECEIVE_BEERS:
        case SEARCH_REQUEST_BEERS:
        case INVALIDATE_REQUEST_BEERS:
            return Object.assign({}, beers(state, action))
        default:
            return state
    }
}

export default dashboardReducer;