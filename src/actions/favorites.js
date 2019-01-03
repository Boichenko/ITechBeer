import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, REQUEST_FAVORITES, RECEIVE_FAVORITES, INVALIDATE_REQUEST_FAVORITES } from '../types';
import { PUNK_API_URL } from '../constants';
import { createAction } from 'redux-actions';

import LocalStorage from '../helpers/localStorageHelper';

export const addToFavorites = createAction(ADD_TO_FAVORITES, id => id);

export const removeFromFavorites = createAction(REMOVE_FROM_FAVORITES, id => id);

export const requestFavorites = createAction(REQUEST_FAVORITES);

export const receiveFavorites = createAction(RECEIVE_FAVORITES, json => json );

export const catchErrorRequestingFavorites = createAction(INVALIDATE_REQUEST_FAVORITES, error => error);

export const fetchFavoriteBeers = () => {
  return function (dispatch) {
    let beerItems = LocalStorage.getFavorites();
    dispatch(requestFavorites())
    return fetch(PUNK_API_URL(`/beers?ids=${beerItems.join('|')}`))
      .then(response => {
        if (!response.ok) {
          throw Error(response.statusText);
        }
        return response.json();
      })
      .then(json => dispatch(receiveFavorites(json)))
      .catch(error => dispatch(catchErrorRequestingFavorites(error)))
  }
}