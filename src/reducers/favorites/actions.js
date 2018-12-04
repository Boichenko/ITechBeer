import { ADD_TO_FAVORITES, REMOVE_FROM_FAVORITES, CONTAINS_IN_FAVORITES } from './types';

export const addToFavorites = (id) => ({
    type: ADD_TO_FAVORITES,
    id
})

export const removeFromFavorites = (id) => ({
    type: REMOVE_FROM_FAVORITES,
    id
})

export const consistInFavorites = (id) => ({
    type: CONTAINS_IN_FAVORITES,
    id 
})