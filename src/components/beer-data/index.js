import React from 'react';
import { connect } from 'react-redux';

import './index.css';

const BeerData = (beerItem) => (
    <div className='beer-data'>
        <div className='beer-header__container'>
            <div className='beer-main-info'>
                <div className='beer-name'>
                    <span>Punk IPA 2007-2010</span>
                    <br />
                    <span>Post Modern Classic. Spiky. Tropical. Hoppy</span>
                </div>
                <button className='add-to-favorites' />
                <div className='beer-description'>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                </div>
            </div>
            <div className='beer-item__container'>
                <img className='beer-logo' src='https://d2g1n.aoscdn.com/wp-content/uploads/2015/05/url-download.jpg' />
            </div>
        </div>
        <div className='beer-characteristics'>
            <div className='properties'>
                <span>Properties</span>
                <ul className='properies-list'>
                    <li className='properties-list-item bordered-circle'>
                        <span>ABV</span>
                        <button>ABV</button>
                        <span>6.0</span>
                    </li>
                    <li className='properties-list-item bordered-circle'>
                        <span>ABV</span>
                        <button>ABV</button>
                        <span>60.0</span>
                    </li>
                    <li className='properties-list-item bordered-circle'>
                        <span>ABV</span>
                        <button>ABV</button>
                        <span>17.0</span>
                    </li>
                </ul>
            </div>
            <div className='food-pairing'>
                <span>Food Pairing</span>
                <ul className='food-pairing-list'>
                    <li className='food-pairing-list-item bordered-angle'>
                        <span>Spicy carne asada with a pico de gallo sauce</span>
                    </li>
                    <li className='food-pairing-list-item bordered-angle'>
                        <span>Shredded chicken tacos with a mango chilli lime salsa</span>
                    </li>
                    <li className='food-pairing-list-item bordered-angle'>
                        <span>Cheesecake with a passion fruit swirl sauce</span>
                    </li>
                </ul>
            </div>
        </div>
        <div className='beer-brewing'>
            <span>Brewing</span>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</span>
        </div>
        <div className='beer-cooking'>
            <div className='ingredients'>
                <span>Ingredients</span>
                <ul className='ingredients-list'>
                    <li className='ingredients-list-item bordered-circle'>
                        <span>Spicy carne asada with a pico de gallo sauce</span>
                        <span>Spicy carne asada with a pico de gallo sauce</span>
                    </li>
                    <li className='ingredients-list-item bordered-circle'>
                        <span>Shredded chicken tacos with a mango chilli lime salsa</span>
                        <span>Shredded chicken tacos with a mango chilli lime salsa</span>
                    </li>
                    <li className='ingredients-list-item bordered-circle'>
                        <span>Cheesecake with a passion fruit swirl sauce</span>
                        <span>Cheesecake with a passion fruit swirl sauce</span>
                    </li>
                </ul>
            </div>
            <div className='method'>
                <span>Method</span>
                <ul className='method-list'>
                    <li className='method-list-item'>
                        <span>Spicy carne asada with a pico de gallo sauce</span>
                        <span>Spicy carne asada with a pico de gallo sauce</span>
                    </li>
                    <li className='method-list-item'>
                        <span>Spicy carne asada with a pico de gallo sauce</span>
                        <span>Shredded chicken tacos with a mango chilli lime salsa</span>
                    </li>
                    <li className='method-list-item'>
                        <span>Spicy carne asada with a pico de gallo sauce</span>
                        <span>Cheesecake with a passion fruit swirl sauce</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
)

export default connect(
    null,
    null
)(BeerData)