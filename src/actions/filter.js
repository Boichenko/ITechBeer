import {
  SET_ALCOHOL,
  SET_BITTERNESS,
  SET_COLOR,
  SET_NAME
} from '../types';

import { createAction } from 'redux-actions';

export const setAlcohol = createAction(SET_ALCOHOL, alcohol => alcohol);

export const setBitterness = createAction(SET_BITTERNESS, bitterness => bitterness);

export const setColor = createAction(SET_COLOR, color => color);
  
export const setName = createAction(SET_NAME, name => name);
  