import fetch from 'isomorphic-fetch';
import { REQUEST_BEERS, RECEIVE_BEERS } from './types';
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

export function fetchBeers() {
  return function (dispatch) {

    dispatch(requestBeers())
    return fetch(PUNK_API_URL(`/beers?page=${page}&per_page=${BEERS_PER_PAGE}`))
      .then(response => response.json())
      .then(json =>

        dispatch(receiveBeers(page, json))
      )

    // В реальном приложении вы также захотите ловить ошибки сетевых запросов.
  }
}