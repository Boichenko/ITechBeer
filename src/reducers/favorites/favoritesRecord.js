import { Record } from 'immutable';

const FavoritesRecord = Record(
    {
        beerItemIds: null,
        beerItems: null,
        isFetching: null,
        didInvalidate: null,
        error: null
    }
)

export default FavoritesRecord;