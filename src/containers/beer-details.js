import { connect } from 'react-redux';

import { fetchBeer } from '../actions/beer';
import { addToFavorites, removeFromFavorites } from '../actions/favorites';

import BeerDetails from '../components/beer-details'

const mapStateToProps = state => ({
    beer: state.beerItem.get('beerData'),
    isLoaded: state.beerItem.get('isLoaded'),
    favorites: state.favorites.get('beerItemIds'),
    error: state.beerItem.get('error')
})

const mapDispatchToProps = dispatch => ({
    fetchBeer: (id) => dispatch(fetchBeer(id)),
    addToFavorites: (id) => dispatch(addToFavorites(id)),
    removeFromFavorites: (id) => dispatch(removeFromFavorites(id)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BeerDetails)