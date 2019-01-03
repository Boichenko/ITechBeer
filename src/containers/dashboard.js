import { connect } from 'react-redux';

import { fetchBeers } from '../actions/dashboard'
import Dashboard from '../components/dashboard'

const mapStateToProps = state => ({
  isFiltered: state.dashboard.get('isFiltered'),
  beers: state.dashboard.get('beers'),
  isFetching: state.dashboard.get('isFetching'),
  error: state.dashboard.get('error'),
  filterError: state.filter.get('error'),
  favorites: state.favorites.get('beerItemIds')
})

const mapDispatchToProps = {
    fetchBeers
}

export default connect(
  mapStateToProps, mapDispatchToProps
)(Dashboard);