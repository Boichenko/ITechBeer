import React from 'react';
import  { connect } from 'react-redux';

import './index.css';
import { setAlcohol, setBitterness, setColor, setName } from '../../reducers/filter/actions';
import { fetchFilterBeers, fetchBeers } from '../../reducers/dashboard/actions';

const Filter = ({name, alcohol, bitterness, colorEbc, setSearchName, setAlcohol, setBitterness, setColor, fetchFilterBeers, isSearched, fetchBeers}) => {

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
                fetchBeers()
            }

            fetchFilterBeers(name, alcohol, bitterness, colorEbc);
        }
    }

    return (
    <div className='beer-filter'>
        <div className='beer-filter__inner-container'>
            <div className='beer-name-filter__container'>
                <input type='text' placeholder='Enter Beer Name...' value={ name } onKeyPress = { (e) => onSearchKeyPressed(e) } onChange={ (e) => setSearchName(e.target.value)} className='beer-name-input'></input>
                <button className='search-button'><i className="icon-search" onClick={(e) => onSearchClick(e) }/></button>
            </div>      
            { isSearched &&
                <div className='beer-characteristics-filter'>
                    <p className='filter-results-header'>Filter results</p>
                    <div className='alchohol'>
                        <p className='characteristic-name'>Alcohol by volume</p>
                        <p className='characteristic-value-text'>{ alcohol }</p>
                        <input className='characteristic-value' type="range" min="2" max="14" value= { alcohol } onChange={ (e) => setAlcohol(Number(e.target.value))} onMouseUp={ () => fetchFilterBeers(name, alcohol, bitterness, colorEbc) }></input>
                    </div>
                    <div className='bitterness'>
                        <p className='characteristic-name'>International Bitterness Units</p>
                        <p className='characteristic-value-text'>{ bitterness }</p>
                        <input className='characteristic-value' type="range" min="0" max="120" value={ bitterness } onChange={ (e) => setBitterness(Number(e.target.value)) } onMouseUp={ () => fetchFilterBeers(name, alcohol, bitterness, colorEbc) }></input>
                    </div>
                    <div className='color-ebc'>
                        <p className='characteristic-name'>Color By EBC</p>
                        <p className='characteristic-value-text'>{ colorEbc }</p>
                        <input className='characteristic-value' type="range" min="4" max="80" value={ colorEbc } onChange={ (e) => setColor(Number(e.target.value)) } onMouseUp={ () => fetchFilterBeers(name, alcohol, bitterness, colorEbc) }></input>
                    </div>
                </div>
            }
        </div>
    </div>
)
}

const mapStateToProps = state => ({
    isSearched: state.dashboard.isSearched,
    alcohol: state.filter.alcohol,
    bitterness: state.filter.bitterness,
    colorEbc: state.filter.color, 
    name: state.filter.name
})

const mapDispatchToProps = dispatch => ({
    setAlcohol: (value) => dispatch(setAlcohol(value)),
    setBitterness: (value) => dispatch(setBitterness(value)),
    setColor: (value) => dispatch(setColor(value)),
    setSearchName: (value) => dispatch(setName(value)),
    fetchFilterBeers: (name, alcohol, bitterness, color) => dispatch(fetchFilterBeers(name, alcohol, bitterness, color)),
    fetchBeers: () => dispatch(fetchBeers())
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

