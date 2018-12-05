import React, { Component } from 'react';
import './index.css';
import { connect } from 'net';

import { Link } from 'react-router-dom'


const Favorites = (favoriteBeers, removeFromFavorites) =>  (
    <div>
        <p className='favorite-header'>Your favorite beers</p>
        <div className='favorite-card'>
            <div className='favorite-card__inner-container'>
                <div className='favorite-info'>
                    <p className='favorite-card-name'>Pubk IPA 2007 - 2010</p>
                    <p className='favorite-card-description'>Pubk IPA 2007 - 2010</p>
                    <p className='favorite-card-description'>tafline</p>
                </div>
                <div className='favorite-img'>
                    <img alt='' />
                </div>
            </div>
        </div>
        <div className='action-buttons'>
            <Link className="action-link" to={`/beer/${beer.id}`}>open></Link>
            <button>remove favorite</button>
        </div>
    </div>
)

const mapStateToProps = state => {

}

const mapDispatchToProps = dispatch => {

}

export default connect(mapStateToProps, 
    mapDispatchToProps)(Favorites)