import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import Method from './method-list';
import Ingredients from './ingredients-list';
import { cleanBeer, fetchBeer } from '../../reducers/beer/actions';

import './index.css';
import Loader from '../loader';

const BeerDetails = ({ beer, fetchBeer, cleanBeer, match}) => { 
    const [isMount, setIsMount] = useState(false);

    useEffect(() => {   
        if(!isMount)
        {
            cleanBeer();
            console.log(match);
            fetchBeer(match.params.beerId);
            setIsMount(true);
        }
    })
 
    return !beer ? (
        <Loader />
    ) 
    : (
        <div className='beer-data'>
            <div className='beer-header__container'>
                <div className='beer-main-info'>
                    <div className='beer-main-info__container'>
                        <div className='beer-name__container'>
                            <p className='beer-name'>{beer.name}</p>
                        </div>
                        <div className='beer-headliner__container'>
                            <p className='beer-headliner'>{beer.tagline}</p>
                        </div>
                        <button className='add-to-favorites'>add to favorites</button>
                        <div className='beer-description__container'>
                            <p className='beer-description'>{beer.description}</p>
                        </div>
                    </div>
                </div>
                <div className='beer-logo__container'>
                    <img className='beer-logo' src={beer.image_url} />
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
                                    <button>ABV</button>
                                    <span>{beer.abv}</span>
                                </div>
                            </li>
                            <li className='properties-list-item bordered-circle'>
                                <div className='list-item__container'>
                                    <span>IBU</span>
                                    <button>IBU</button>
                                    <span>{beer.ibu}</span>
                                </div>
                            </li>
                            <li className='properties-list-item bordered-circle'>
                                <div className='list-item__container'>
                                    <span>EBC</span>
                                    <button>EBC</button>
                                    <span>{beer.ebc}</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className='food-pairing__container'>
                        <span className='list-header'>Food Pairing</span>
                        <ul className='food-pairing-list'> 
                            { beer.food_pairing.map((food, index) => (
                                <li key={index} className='food-pairing-list-item bordered-angle'>
                                    <div className='list-item__container'>
                                        <span>{food}</span>
                                    </div>
                                </li>
                                ))
                            }
                            </ul>
                    </div>
                </div>
            </div>
            <div className='beer-brewing__container'>
                <p className='brewing-header'>Brewing</p>
                <p className='brewing-content'>{beer.brewers_tips}</p>
            </div>
            <div className='beer-cooking__container'>
                { beer.ingredients && <Ingredients /> } 
                { beer.method && <Method /> } 
            </div>
        </div>
)}

const mapStateToProps = state => ({
    beer: state.beer.beer
})

const mapDispatchToProps = dispatch => ({
    cleanBeer: () => dispatch(cleanBeer()),
    fetchBeer: (id) => dispatch(fetchBeer(id)),
  })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BeerDetails)