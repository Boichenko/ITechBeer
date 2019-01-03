import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Filter = ({ name, alcohol, bitterness, colorEbc, setSearchName, setAlcohol, setBitterness, setColor, fetchFilterBeers, isFiltered, fetchBeers }) => {
    const onSearchClick = (e) => {
        e.preventDefault()

        if (!name.trim()) {
            return fetchBeers()
        }

        return fetchFilterBeers(name, alcohol, bitterness, colorEbc);
    }

    const onSearchKeyPressed = (e) => {
        if (e.key === 'Enter') {
            if (!name.trim()) {
                return fetchBeers()
            }

            return fetchFilterBeers(name, alcohol, bitterness, colorEbc);
        }
    }

    return (
        <div className='beer-filter'>
            <div className='beer-filter__inner-container'>
                <div className='beer-name-filter__container'>
                    <input type='text' placeholder='Enter Beer Name...' value={name} onKeyPress={(e) => onSearchKeyPressed(e)} onChange={(e) => setSearchName(e.target.value)} className='beer-name-input'></input>
                    <button className='search-button'><i className="icon-search" onClick={(e) => onSearchClick(e)} /></button>
                </div>
                {isFiltered &&
                    <div className='beer-characteristics-filter'>
                        <p className='filter-results-header'>Filter results</p>
                        <div className='alchohol'>
                            <p className='characteristic-name'>Alcohol by volume</p>
                            <p className='characteristic-value-text'>{alcohol}</p>
                            <input className='characteristic-value' type="range" min="2" max="14" value={alcohol} onChange={(e) => setAlcohol(Number(e.target.value))} onMouseUp={() => fetchFilterBeers(name, alcohol, bitterness, colorEbc)}></input>
                        </div>
                        <div className='bitterness'>
                            <p className='characteristic-name'>International Bitterness Units</p>
                            <p className='characteristic-value-text'>{bitterness}</p>
                            <input className='characteristic-value' type="range" min="0" max="120" value={bitterness} onChange={(e) => setBitterness(Number(e.target.value))} onMouseUp={() => fetchFilterBeers(name, alcohol, bitterness, colorEbc)}></input>
                        </div>
                        <div className='color-ebc'>
                            <p className='characteristic-name'>Color By EBC</p>
                            <p className='characteristic-value-text'>{colorEbc}</p>
                            <input className='characteristic-value' type="range" min="4" max="80" value={colorEbc} onChange={(e) => setColor(Number(e.target.value))} onMouseUp={() => fetchFilterBeers(name, alcohol, bitterness, colorEbc)}></input>
                        </div>
                    </div>
                }
            </div>
        </div>
    )
}

Filter.propTypes = {
    alcohol: PropTypes.number,
    bitterness: PropTypes.number, 
    colorEbc: PropTypes.number,
    name: PropTypes.string,
    isFiltered: PropTypes.bool.isRequired, 
    setSearchName: PropTypes.func.isRequired, 
    setAlcohol: PropTypes.func.isRequired,
    setBitterness: PropTypes.func.isRequired,
    setColor: PropTypes.func.isRequired,
    fetchBeers: PropTypes.func.isRequired,
    fetchFilterBeers: PropTypes.func.isRequired
}

export default React.memo(Filter)