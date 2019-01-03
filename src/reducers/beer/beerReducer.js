import { handleActions } from 'redux-actions'

import { requestBeer, receiveBeer, catchErrorRequestingBeer} from '../../actions/beer';
import BeerRecord, { BeerItemRecord } from './beerRecord'

const beerReducer = handleActions({
        [requestBeer]: (state, action) => {
            return state.set('isFetching', true)
                .set('didInvalidate', false)
                .set('id', action.payload)
        },
        [receiveBeer]: (state, action) => {
            return state.set('isFetching', false)
                        .set('beerData', BeerItemRecord.parse(action.payload))
                        .set('isLoaded', true)
                    },
        [catchErrorRequestingBeer]: (state, action) => {
            return state.set('isFetching', false)
                        .set('didInvalidate', true)
                        .set('error', action.payload)
        },
    },
    new BeerRecord({
        isFetching: false,
        didInvalidate: false,
        beerData: new BeerItemRecord(),
        isLoaded: false
    })
)

export default beerReducer;