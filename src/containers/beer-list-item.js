import { connect } from 'react-redux';

import { addToFavorites, removeFromFavorites } from '../actions/favorites';
import BeerListItem from '../components/beer-list-item'

const mapDispatchToProps = dispatch => ({
    addToFavorites: (id) => dispatch(addToFavorites(id)),
    removeFromFavorites: (id) => dispatch(removeFromFavorites(id))
})

export default connect(
    null, mapDispatchToProps
)(BeerListItem);
