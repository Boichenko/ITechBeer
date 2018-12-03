import { CLEAN_BEER, REQUEST_BEER, RECEIVE_BEER, INVALIDATE_REQUEST_BEER } from './types';
import { PUNK_API_URL } from '../../constants';


export const cleanBeer = () => {
    return {
      type: CLEAN_BEER
    }
  }

  export const requestBeer = (id) => {
    return {
      type: REQUEST_BEER,
      id
    }
  }
  
  export const receiveBeer = (json) => {
    return {
      type: RECEIVE_BEER,
      beer: json
    }
  }
  
  export const catchErrorRequestingBeer = (id, error) => {
    return {
      type: INVALIDATE_REQUEST_BEER,
      error,
      id
    }
  }

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