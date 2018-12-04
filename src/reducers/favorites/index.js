import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, CONTAINS_IN_FAVORITES } from './types';

const initialState = {
}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_FAVORITES:
        case REMOVE_FROM_FAVORITES:
        case CONTAINS_IN_FAVORITES:
        default:
            return state;
    }

}

export default favoritesReducer