import { OPEN_BEER } from './types';


export const openBeer = (beer) => {
    return {
      type: OPEN_BEER,
      beer: beer
    }
  }