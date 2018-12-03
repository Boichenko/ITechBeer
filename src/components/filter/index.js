import React from 'react';

import './index.css';

const Filter = () => {
    <div className='beer-filter'>
        <div className='beer-container'>
            <div className='beer-name-filter__container'>
                <input className='beer-name-input'></input>
            </div>
            <div className='beer-characteristics-filter'>
                <span>Filter results</span>
                <div className='alchohol'>
                    <span className='characterictic-name'>Alcohol by volume</span>
                    <span></span>
                    <span></span>
                </div>
                <div className='bitterness'>
                    <span className='characterictic-name'>International Bitterness Units</span>
                    <span></span>
                    <span></span>
                </div>
                <div className='color-ebc'>
                    <span className='characterictic-name'>Color By EBC</span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </div>
}

export default Filter;

