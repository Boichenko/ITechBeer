import React from 'react';
import  { connect } from 'react-redux';

import './index.css';

const Filter = () => (
    <div className='beer-filter'>
        <div className='beer-filter__inner-container'>
            <div className='beer-characteristics-filter'>
                <p className='filter-results-header'>Filter results</p>
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
)

export default connect(null, null)(Filter);

