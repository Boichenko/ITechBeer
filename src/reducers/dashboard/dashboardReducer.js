import { handleActions } from 'redux-actions';
import { List } from 'immutable';

import {
    requestBeers,
    receiveBeers,
    catchErrorRequestingBeers,
    requestSearchBeers,
    receiveSearchBeers,
    catchErrorRequestingSearchBeers
} from '../../actions/dashboard';

import DashboardRecord from './dashboardRecord';

const dashboardReducer = handleActions(
    {
        [requestBeers]: (state) => {
            return state.set('isFetching', true)
                        .set('didInvalidate', false)
        },

        [receiveBeers]: (state, action) => {
            return state.set('currentPage', action.payload.currentPage)
                        .set('isFetching', false)
                        .set('didInvalidate', false)
                        .update('beers', beers => state.get('isFiltered') ? new List() : beers.concat(action.payload.beers))
                        .set('isFiltered', false)
        },

        [catchErrorRequestingBeers]: (state, action) => {
            return state.set('currentPage', action.payload.currentPage)
                        .set('error', action.payload.error)
                        .set('didInvalidate', true)
        },

        [requestSearchBeers]: (state) => {
            return state.set('didInvalidate', false)
                        .set('isFetching', true)
        },

        [receiveSearchBeers]: (state, action) => {
            return state.set('beers', action.payload.beers)
                        .set('isFetching', false)
                        .set('didInvalidate', false)
                        .set('isFiltered', true)
        },
        [catchErrorRequestingSearchBeers]: (state, action) => {
            return state.set('error', action.payload.error)
                        .set('didInvalidate', true)
        }
    },

    new DashboardRecord(
        {
            beers: new List(),
            isFetching: false,
            didInvalidate: false,
            currentPage: 0,
            isFiltered: false
        }
    )
);

export default dashboardReducer;