import React from 'react';
import './index.css';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';

import { addToFavorites, removeFromFavorites } from '../../reducers/favorites/actions';

const BeerListItem = ({ beer, isFavorite, addToFavorites, removeFromFavorites }) => (
    <li className="beer-item">
        <div className="beer-item__container">
            <img className="beer-item__logo" alt="" src={beer.image_url}/>

                <div className="beer-item__data-container">
                    <div className="beer-item__information">
                        <p className="beer-item__header">{beer.name}</p>
                        <p className='beer-item-tagline'>{beer.tagline}</p>
                    </div>

                <Link className="action-link" to={`/beer/${beer.id}`}>open</Link>
                {
                    (
                        isFavorite && <button className="action-link" onClick = { () => removeFromFavorites(beer.id) }>remove from favorites</button>
                    ) || <button className="action-link" onClick={ () => addToFavorites(beer.id) }>add to favorites</button>
                }
            </div>
        </div>
    </li>
);

const mapDispatchToProps = dispatch => ({
    addToFavorites: (id) => dispatch(addToFavorites(id)),
    removeFromFavorites: (id) => dispatch(removeFromFavorites(id))
})

export default connect(
    null, mapDispatchToProps
)(BeerListItem);
