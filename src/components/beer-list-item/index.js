import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types'
import { Record } from 'immutable';

import './index.css';

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

BeerListItem.propTypes = {
    beer: PropTypes.instanceOf(Record),
    isFavorite: PropTypes.bool.isRequired,
    addToFavorites: PropTypes.func.isRequired,
    removeFromFavorites: PropTypes.func.isRequired
}

export default React.memo(BeerListItem)
