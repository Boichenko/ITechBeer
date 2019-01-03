import fetch from 'isomorphic-fetch'
import { createAction } from 'redux-actions';

import {
  REQUEST_BEERS,
  RECEIVE_BEERS,
  INVALIDATE_REQUEST_BEERS,
  SEARCH_REQUEST_BEERS,
  SEARCH_RECEIVE_BEERS,
  INVALIDATE_SEARCH_BEERS
} from '../types';

import {
  PUNK_API_URL,
  BEERS_PER_PAGE
} from '../constants';

let page = 0;

export const requestBeers = createAction(REQUEST_BEERS, () => ++page);

export const receiveBeers = createAction(RECEIVE_BEERS, (page, json) => {
    return { currentPage: page, beers: json }
  }
);

export const catchErrorRequestingBeers = createAction(INVALIDATE_REQUEST_BEERS, (page, error) => {
    return { currentPage: page, error: error }
  }
);

export const requestSearchBeers = createAction(SEARCH_REQUEST_BEERS, (name, alcohol, bitterness, color) => {
    return {     
      name,
      alcohol,
      bitterness,
      color 
    }
  }
);

export const receiveSearchBeers = createAction(SEARCH_RECEIVE_BEERS, (json) => {
    return {     
      beers: json,
      isFiltered: true
    }
  }
);

export const catchErrorRequestingSearchBeers = createAction(INVALIDATE_SEARCH_BEERS, (error) => {
    return {     
      error
    }
  }
);

export const fetchBeers = () => {
  return function (dispatch) {

    dispatch(requestBeers())
    return fetch(PUNK_API_URL(`/beers?page=${page}&per_page=${BEERS_PER_PAGE}`))
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => dispatch(receiveBeers(page, json)))
      .catch(error => dispatch(catchErrorRequestingBeers(page, error)))
  }
}

export const fetchFilterBeers = (name, alcohol, bitterness, color) => {
  return function (dispatch) {

    dispatch(requestSearchBeers(name, alcohol, bitterness, color))
    return fetch(PUNK_API_URL(`/beers?beer_name=${name.split(' ').join('_')}&abv_lt=${alcohol}&ibu_lt=${bitterness}&ebc_lt=${color}`))
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => dispatch(receiveSearchBeers(json)))
      .catch(error => dispatch(catchErrorRequestingSearchBeers(error)))
  }
}