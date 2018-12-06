import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, REQUEST_FAVORITES, RECEIVE_FAVORITES, INVALIDATE_REQUEST_FAVORITES } from './types';
import { PUNK_API_URL } from '../../constants';

import LocalStorage from '../../helpers/localStorageHelper';

export const addToFavorites = (id) => ({
    type: ADD_TO_FAVORITES,
    id
})

export const removeFromFavorites = (id) => ({
    type: REMOVE_FROM_FAVORITES,
    id
})

export const requestFavorites = () => {
    return {
      type: REQUEST_FAVORITES,
    }
  }
  
  export const receiveFavorites = (json) => {
    return {
      type: RECEIVE_FAVORITES,
      beerItems: json
    }
  }
  
  export const catchErrorRequestingFavorites = (error) => {
    return {
      type: INVALIDATE_REQUEST_FAVORITES,
      error
    }
  }
  
  export const fetchFavoriteBeers = () => {
    return function (dispatch) {
        let beerItems = LocalStorage.getFavorites();
        dispatch(requestFavorites())
        return fetch(PUNK_API_URL(`/beers?ids=${ beerItems.join('|') }`))
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