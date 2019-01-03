import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { List } from 'immutable';
import PropTypes from 'prop-types';

import './index.css';
import Loader from '../loader';

const Favorites = ({ beerItems, removeFromFavorites, isFetching, fetchFavoriteBeers, error }) => {

    useEffect(() => {
        fetchFavoriteBeers();
    }, [])

    return (
        <div className='favorites'>
            <div className='favorite__inner-container'>
                <p className='favorite-header'>Your favorite beers</p>
                {!error && !isFetching && beerItems.length == 0 && <p className='faverite-no-beers'>No beers yet</p>}
                {
                    error &&
                    <div className="error-message__container">
                        <span className="error-message">Oops! We have an error. <br />Please, try to reload page</span>
                    </div>
                }
                {isFetching && <Loader />}
                <ul className='favorite-list'>
                    {beerItems.map((item, index) => (
                        <li className='favorite-list-item' key={index}>
                            <div className='favorite-card'>
                                <div className='favorite-card__inner-container'>
                                    <div className='favorite-info__inner-container'>
                                        <p className='favorite-card-name'>{item.name}</p>
                                        <p className='favorite-card-tagline'>{item.tagline}</p>
                                        <p className='favorite-card-description'>{item.description}</p>
                                    </div>
                                    <div className='favorite-img__inner-container'>
                                        <img alt='' className='favorite-img' src={item.image_url} />
                                    </div>
                                </div>
                            </div>
                            <div className='action-buttons__inner-container'>
                                <Link className='favorite-action-link' to={`/beer/${item.id}`}>open</Link>
                                <button className='favorite-action-link' onClick={() => removeFromFavorites(item.id)}>remove favorite</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

Favorites.propTypes = {
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string,
    beerItems: PropTypes.instanceOf(List),
    removeFromFavorites: PropTypes.func.isRequired,
    fetchFavoriteBeers: PropTypes.func.isRequired
}

export default React.memo(Favorites)
