import { handleActions } from 'redux-actions';
import { addToFavorites, removeFromFavorites, requestFavorites, receiveFavorites, catchErrorRequestingFavorites } from '../../actions/favorites';

import LocalStorage from '../../helpers/localStorageHelper';
import FavoritesRecord from './favoritesRecord';
import { List } from 'immutable';

const favoritesReducer = handleActions(
    {
        [addToFavorites]: (state, action) => {
            LocalStorage.addFavorite(action.payload);
            return state.update('beerItemIds', beerItemIds => beerItemIds.push(action.payload))
        },

        [removeFromFavorites]: (state, action) => {
            LocalStorage.removeFavorite(action.payload);
            return state.update('beerItemIds', beerItemIds => beerItemIds.filter(item => item !== action.payload))
                        .update('beerItems', beerItems => beerItems.filter(item => item.id !== action.payload))
        },

        [requestFavorites]: (state) => {
            return state.set('isFetching', true)
                        .set('didInvalidate', false)
        },

        [receiveFavorites]: (state, action) => {
            return state.set('isFetching', false)
                        .set('didInvalidate', false)
                        .set('beerItems', action.payload)
        },

        [catchErrorRequestingFavorites]: (state, action) => {
            return state.set('isFetching', false)
                        .set('didInvalidate', true)
                        .set('error', action.payload)
        }
    },

    new FavoritesRecord({
        beerItemIds: new List(LocalStorage.getFavorites()),
        beerItems: new List(),
        didInvalidate: false,
        isFetching: false
    })
)

export default favoritesReducer