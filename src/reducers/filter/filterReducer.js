import { handleActions } from 'redux-actions';

import { setAlcohol, setBitterness, setColor, setName } from '../../actions/filter';

import FilterRecord from './filterRecord';

const filterReducer = handleActions(
    {
        [setAlcohol]: (state, action) => {
            return state.set('alcohol', action.payload)
        },

        [setBitterness]: (state, action) => {
            return state.set('bitterness', action.payload)
        },

        [setColor]: (state, action) => {
            return state.set('color', action.payload)
        },

        [setName]: (state, action) => {
            return state.set('name', action.payload)
        }
    },

    new FilterRecord({
        alcohol: 7,
        bitterness: 60,
        color: 40
    })
)

export default filterReducer;