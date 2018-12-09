import {
    SET_ALCOHOL,
    SET_BITTERNESS,
    SET_COLOR,
    SET_NAME
} from './types';

const initialState = {
    alcohol: 7,
    bitterness: 60,
    color: 40,
    name: ''
};

const filterReducer = ( state = initialState, action ) => {
    switch (action.type) {
        case SET_ALCOHOL:
            return Object.assign({}, state, {
                alcohol: action.alcohol
            })
        case SET_BITTERNESS:
            return Object.assign({}, state, {
                bitterness: action.bitterness
            })
        case SET_COLOR:
            return Object.assign({}, state, {
                color: action.color
            })
        case SET_NAME:
            return Object.assign({}, state, {
                    name: action.name
                })
        default:
            return state
    }
}

export default filterReducer;