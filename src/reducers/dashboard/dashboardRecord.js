import { Record, List } from 'immutable';

const DashboardRecord = Record(
    {
        isFetching: null,
        didInvalidate: null,
        beers: new List(),
        currentPage: null,
        isFiltered: null,
        error: null
    }
)

export default DashboardRecord