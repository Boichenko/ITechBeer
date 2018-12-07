import { SET_ALCOHOL, SET_BITTERNESS, SET_COLOR } from './types';

const initialState = {
    alcohol: 14,
    bitterness: 120,
    color: 80
};

const filterReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case SET_ALCOHOL:
            return Object.assign({}, state, {
                alcohol: action.alcohol,
            })
        case SET_BITTERNESS:
        return Object.assign({}, state, {
                bitterness: action.bitterness,
            })
        case SET_COLOR:
        return Object.assign({}, state, {
                color: action.color,
            })
        default:
            return state
    }
}

export default filterReducer;