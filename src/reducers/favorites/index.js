import { remove }  from 'lodash';

import LocalStorage from './../../helpers/localStorageHelper';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES } from './types';

let beerItems;
const initialState = {
    beerItems: LocalStorage.getFavorites(),
}

const favoritesReducer = (state = initialState, action) => {
        switch(action.type) {
            case ADD_TO_FAVORITES:
                beerItems = [...state.beerItems];
                beerItems.push(action.id);
                LocalStorage.addFavorite(action.id);
                return {...state, beerItems};
            case REMOVE_FROM_FAVORITES:
                beerItems = [...state.beerItems];
                remove(beerItems, item => item === action.id);
                LocalStorage.removeFavorite(action.id);
                return {...state, beerItems};
            default:
                return state;
    }

}

export default favoritesReducer