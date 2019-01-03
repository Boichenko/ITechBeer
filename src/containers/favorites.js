import { connect } from 'react-redux';

import { removeFromFavorites, fetchFavoriteBeers } from '../actions/favorites'
import Favorites from '../components/favorites'

const mapStateToProps = state => ({
    beerItems: state.favorites.get('beerItems'),
    isFetching: state.favorites.get('isFetching'),
    error: state.favorites.get('error')
})

const mapDispatchToProps = dispatch => ({
    removeFromFavorites: (id) => dispatch(removeFromFavorites(id)),
    fetchFavoriteBeers: () => dispatch(fetchFavoriteBeers())
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Favorites);