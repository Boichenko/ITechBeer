import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Record, List } from 'immutable';

import Methods from './method-list';
import Ingredients from './ingredients-list';
import Loader from '../loader';

import './index.css';

const BeerDetails = ({ beer, fetchBeer, match, addToFavorites, removeFromFavorites, favorites, error, isLoaded }) => {
    useEffect(() => {
        fetchBeer(match.params.beerId);
    }, [])

    return (
        <div className='beer-data'>
            {
                ((error) &&
                    <div className="error-message__container">
                        <span className="error-message">Oops! We have an error. <br />Please, try to reload page</span>
                    </div>)
                ||
                (!isLoaded || !beer ? (<Loader />)
                    : (
                            <div className='beer-data__container'>
                                <div className='beer-header__container'>
                                    <div className='beer-main-info'>
                                        <div className='beer-main-info__container'>
                                            <div className='beer-name__container'>
                                                <p className='beer-name'>{beer.name}</p>
                                            </div>
                                            <div className='beer-headliner__container'>
                                                <p className='beer-headliner'>{beer.tagline}</p>
                                            </div>
                                            {
                                                (favorites.includes(beer.id) &&
                                                    <button className='add-to-favorites' onClick={() => removeFromFavorites(beer.id)}>remove from favorites</button>
                                                )
                                                || <button className='add-to-favorites' onClick={() => addToFavorites(beer.id)}>add to favorites</button>
                                            }
                                            <div className='beer-description__container'>
                                                <p className='beer-description'>{beer.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='beer-logo__container'>
                                        <img className='beer-logo' alt='' src={beer.imageUrl} />
                                    </div>
                                </div>
                                <div className='beer-characteristics'>
                                    <div className='beer-characteristic__container'>
                                        <div className='properties-content__container'>
                                            <span className='list-header'>Properties</span>
                                            <ul className='properties-list'>
                                                <li className='properties-list-item bordered-circle'>
                                                    <div className='list-item__container'>
                                                        <span>ABV</span>
                                                        <i className='icon-notification' data-title="ABV"></i>
                                                        <div className='property-value__container'>
                                                            <span>{beer.abv}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className='properties-list-item bordered-circle'>
                                                    <div className='list-item__container'>
                                                        <span>IBU</span>
                                                        <div className='icon-notification__container'>
                                                            <i className='icon-notification' data-title="IBU" />
                                                        </div>
                                                        <div className='property-value__container'>
                                                            <span>{beer.ibu}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li className='properties-list-item bordered-circle'>
                                                    <div className='list-item__container'>
                                                        <span>EBC</span>
                                                        <div className='icon-notification__container'>
                                                            <i className='icon-notification' data-title="EBC" />
                                                        </div>
                                                        <div className='property-value__container'>
                                                            <span>{beer.ebc}</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className='food-pairing__container'>
                                            <span className='list-header'>Food Pairing</span>
                                            <ul className='food-pairing-list'>
                                                {beer.foodPairing.map((food, index) => (
                                                    <li key={index} className='food-pairing-list-item bordered-angle'>
                                                        <div className='list-item__container'>
                                                            <span>{food}</span>
                                                        </div>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className='beer-brewing__container'>
                                    <p className='brewing-header'>Brewing</p>
                                    <p className='brewing-content'>{beer.brewersTips}</p>
                                </div>
                                <div className='beer-cooking__container'>
                                    {beer.ingredients && <Ingredients ingredients={beer.ingredients} />}
                                    {beer.method && <Methods method={beer.method} />}

                                </div>
                            </div>
                    )
                )
            }
        </div>
    )
}

BeerDetails.propTypes = {
    beer: PropTypes.instanceOf(Record),
    match: PropTypes.object.isRequired,
    favorites: PropTypes.instanceOf(List),
    error: PropTypes.string,
    isLoaded: PropTypes.bool.isRequired,
    addToFavorites: PropTypes.func.isRequired,
    removeFromFavorites: PropTypes.func.isRequired,
    fetchBeer: PropTypes.func.isRequired
}

export default React.memo(BeerDetails)