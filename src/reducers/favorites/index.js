import { remove }  from 'lodash';

import LocalStorage from './../../helpers/localStorageHelper';
import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, REQUEST_FAVORITES, RECEIVE_FAVORITES, INVALIDATE_REQUEST_FAVORITES } from './types';

let beerItemIds, beerItems;
const initialState = {
    beerItemIds: LocalStorage.getFavorites(),
    beerItems: []
}

const favoritesReducer = (state = initialState, action) => {
        switch(action.type) {
            case ADD_TO_FAVORITES:
                beerItemIds = [...state.beerItemIds];
                beerItemIds.push(action.id);
                LocalStorage.addFavorite(action.id);
                return {...state, beerItemIds};
            case REMOVE_FROM_FAVORITES:
                beerItemIds = [...state.beerItemIds];
                remove(beerItemIds, item => item === action.id);
                LocalStorage.removeFavorite(action.id);
                beerItems = [...state.beerItems];

                if(beerItems.length){
                    remove(beerItems, item => item.id === action.id);
                }
                return {...state, beerItemIds, beerItems};
            case INVALIDATE_REQUEST_FAVORITES:
                return Object.assign({}, state, {
                    didInvalidate: true,
                    error: action.error,
                })
            case REQUEST_FAVORITES:
                return Object.assign({}, state, {
                    isFetching: true,
                    didInvalidate: false,
                })
            case RECEIVE_FAVORITES:
                return Object.assign({}, state, {
                    isFetching: false,
                    didInvalidate: false,
                    beerItems: action.beerItems,
                    currentPage: action.currentPage
                })
            default:
                return state;
    }

}

export default favoritesReducer