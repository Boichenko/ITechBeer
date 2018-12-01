import {TOGGLE_VISIBILITY_SIDEBAR} from './types';

const initialState = { visible: false };

const menuReducer = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_VISIBILITY_SIDEBAR: 
        return {
            visible: !state.visible
        }
      default:
        return state
    }
  }
  
  export default menuReducer;