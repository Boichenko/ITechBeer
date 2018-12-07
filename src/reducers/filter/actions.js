import { SET_ALCOHOL, SET_BITTERNESS, SET_COLOR } from './types';


export const setAlcohol = (alcohol) => {
    return {
      type: SET_ALCOHOL,
      alcohol
    }
  }

  export const setBitterness = (bitterness) => {
    return {
      type: SET_BITTERNESS,
      bitterness
    }
  }
  
  export const setColor = (color) => {
    return {
      type: SET_COLOR,
      color
    }
  }
  