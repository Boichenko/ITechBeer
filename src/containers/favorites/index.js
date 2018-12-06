import React, { useLayoutEffect } from 'react';
import './index.css';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom'

import { removeFromFavorites, fetchFavoriteBeers } from '../../reducers/favorites/actions';
import Loader from '../../components/loader';

const Favorites = ({ beerItems = [], removeFromFavorites, isFetching, fetchFavoriteBeers }) =>  {
    
    useLayoutEffect(() => { 
        fetchFavoriteBeers();
    }, []) 
    
    return (
        <div className='favorites'>
            <div className='favorite__inner-container'>
                <p className='favorite-header'>Your favorite beers</p>
                { !isFetching && beerItems.length == 0 && <p className='faverite-no-beers'>No beers yet</p> }
                { isFetching && <Loader /> }
                    <ul className='favorite-list'>
                    { beerItems.map((item, index) => (
                        <li className='favorite-list-item' key={ index }>
                            <div className='favorite-card'>
                                <div className='favorite-card__inner-container'>
                                    <div className='favorite-info__inner-container'>
                                        <p className='favorite-card-name'>{ item.name }</p>
                                        <p className='favorite-card-tagline'>{ item.tagline }</p>
                                        <p className='favorite-card-description'>{ item.description }</p>
                                    </div>
                                    <div className='favorite-img__inner-container'>
                                        <img alt='' className='favorite-img' src={ item.image_url }/>
                                    </div>
                                </div>
                            </div>
                            <div className='action-buttons__inner-container'>
                                <Link className='favorite-action-link' to={`/beer/${ item.id }`}>open</Link>
                                <button className='favorite-action-link' onClick={ () => removeFromFavorites(item.id) }>remove favorite</button>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>  
        </div>
)}

const mapStateToProps = state => ({
    beerItems: state.favorites.beerItems,
    isFetching: state.favorites.isFetching
})

const mapDispatchToProps = dispatch => ({
    removeFromFavorites: (id) => dispatch(removeFromFavorites(id)),
    fetchFavoriteBeers: () => dispatch(fetchFavoriteBeers())
})

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(Favorites);