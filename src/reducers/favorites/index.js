import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, CONTAINS_IN_FAVORITES, GET_FAVORITES } from './types';
import { _  as lodash } from 'lodash';

let beerItems;
const initialState = {}

const favoritesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TO_FAVORITES:
            beerItems = state.beerItems;
            beerItems.push(action.id);
            localStorage.setItem('favorite_beers', beerItems)
            return Object.assign({}, state, {
                beerItems
            });
        case REMOVE_FROM_FAVORITES:
            beerItems = state.beerItems;
            lodash.remove(beerItems, beerItem => beerItem === action.type.id)
            localStorage.setItem('favorite_beers', beerItems)
            return Object.assign({}, state, {
                beerItems
            });
        case GET_FAVORITES:
            beerItems = JSON.parse(localStorage.getItem('favorite_beers')) || [];
            return Object.assign({}, state, {
                beerItems
            })
        case CONTAINS_IN_FAVORITES:
        default:
            return state;
    }

}

export default favoritesReducer