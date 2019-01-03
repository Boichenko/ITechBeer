import { REQUEST_BEER, RECEIVE_BEER, INVALIDATE_REQUEST_BEER } from '../types';
import { PUNK_API_URL } from '../constants';

import { createAction } from 'redux-actions';

export const requestBeer = createAction(REQUEST_BEER, id => id);

export const receiveBeer = createAction(RECEIVE_BEER, json => json);
  
export const catchErrorRequestingBeer = createAction(INVALIDATE_REQUEST_BEER, error => error);

  export const fetchBeer = (beerId) => {
    return function (dispatch) {
  
      dispatch(requestBeer(beerId))
      return fetch(PUNK_API_URL(`beers/${beerId}`))
        .then(response => {
          if (!response.ok) {
            throw Error(response.statusText);
          }
          return response.json();
        })
        .then(json => dispatch(receiveBeer(json[0])))
        .catch(error => dispatch(catchErrorRequestingBeer(beerId, error)))
    }
  }