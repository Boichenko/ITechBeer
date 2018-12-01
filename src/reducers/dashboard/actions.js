// export const loadBeers = () => {
//     return dispatch()
// }
import { REQUEST_BEERS, RECEIVE_BEERS } from './types';

export const requestBeers = (page) => {
    return {
        type: REQUEST_BEERS,
        page
    }
}

export const receiveBeers = (json) => {
  return {
    type: RECEIVE_BEERS,
    posts: json.data.children.map(child => child.data)
  }
}