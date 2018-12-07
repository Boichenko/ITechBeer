import fetch from 'isomorphic-fetch';
import { REQUEST_BEERS, RECEIVE_BEERS, INVALIDATE_REQUEST_BEERS, SEARCH_REQUEST_BEERS, SEARCH_RECEIVE_BEERS, INVALIDATE_SEARCH_BEERS, FILTER_BEERS } from './types';
import { PUNK_API_URL, BEERS_PER_PAGE } from '../../constants';

let page = 0;

export const requestBeers = () => {
  return {
    type: REQUEST_BEERS,
    currentPage: page++
  }
}

export const receiveBeers = (page, json) => {
  return {
    type: RECEIVE_BEERS,
    beers: json,
    currentPage: page
  }
}

export const catchErrorRequestingBeers = (error) => {
  return {
    type: INVALIDATE_REQUEST_BEERS,
    error,
    currentPage: page
  }
}

export const requestSearchBeers = (name) => {
  return {
    type: SEARCH_REQUEST_BEERS,
    searchName: name
  }
}

export const receiveSearchBeers = (json) => {
  return {
    type: SEARCH_RECEIVE_BEERS,
    beers: json,
    isSearched: true
  }
}

export const catchErrorRequestingSearchBeers = (name, error) => {
  return {
    type: INVALIDATE_SEARCH_BEERS,
    error,
    searchName: name
  }
}

export const filterBeers = (alcohol, bitterness, color) => {
  return {
    type: FILTER_BEERS,
    alcohol,
    bitterness,
    color
  }
}

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

export const fetchBeersByName = (name) => {
  return function (dispatch) {

    dispatch(requestSearchBeers(name))
    return fetch(PUNK_API_URL(`/beers?beer_name=${name.split(' ').join('_')}`))
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => dispatch(receiveSearchBeers(json)))
      .catch(error => dispatch(catchErrorRequestingSearchBeers(page, error)))
  }
}