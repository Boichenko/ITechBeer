import React from 'react';
import { connect } from 'react-redux';

import Method from './method-list';
import Ingredients from './ingredients-list';

import './index.css';

const BeerDetails = ({beerItem={}}) => (
    <div className='beer-data'>
        <div className='beer-header__container'>
            <div className='beer-main-info'>
                <div className='beer-main-info__container'>
                    <div>
                        <span className='beer-name'>{beerItem.name}</span>
                        <br />
                        <span className='beer-headliner'>{beerItem.tagline}</span>
                    </div>
                    <button className='add-to-favorites'>add to favorites</button>
                    <div className='beer-description'>
                        <span>{beerItem.tagline}</span>
                    </div>
                </div>
            </div>
            <div className='beer-item__container'>
                <img className='beer-logo' src={beerItem.image_url} />
            </div>
        </div>
        <div className='beer-characteristics'>
            <div className='properties'>
                <span>Properties</span>
                <ul className='properies-list'>
                    <li className='properties-list-item bordered-circle'>
                        <span>ABV</span>
                        <button>ABV</button>
                        <span>{beerItem.abv}</span>
                    </li>
                    <li className='properties-list-item bordered-circle'>
                        <span>IBU</span>
                        <button>IBU</button>
                        <span>{beerItem.ibu}</span>
                    </li>
                    <li className='properties-list-item bordered-circle'>
                        <span>EBC</span>
                        <button>EBC</button>
                        <span>{beerItem.ebc}</span>
                    </li>
                </ul>
            </div>
            {
                beerItem.food_pairing &&
                <div className='food-pairing'>
                    <span>Food Pairing</span>
                    <ul className='food-pairing-list'> 
                        { beerItem.food_pairing.map((food, index) => (
                                <li key={index} className='food-pairing-list-item bordered-angle'>
                                    <span>{food}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            }
            
        </div>
        <div className='beer-brewing'>
            <span>Brewing</span>
            <span>{beerItem.brewers_tips}</span>
        </div>
        <div className='beer-cooking'>
            { beerItem.ingredients && <Ingredients /> } 
            { beerItem.method && <Method /> } 
        </div>
    </div>
)

const mapStateToProps = state => ({
    beer: state.beer.beer,
    isFetching: state.dashboard.isFetching
})

export default connect(
    mapStateToProps,
    null
)(BeerDetails)