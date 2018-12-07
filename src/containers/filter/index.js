import React from 'react';
import  { connect } from 'react-redux';

import './index.css';
import {setAlcohol, setBitterness, setColor} from '../../reducers/filter/actions';
import {filterBeers} from '../../reducers/dashboard/actions';

const Filter = ({ alcohol, bitterness, colorEbc, setAlcohol, setBitterness, setColor, filterBeers }) => { 
    return (
    <div className='beer-filter'>
        <div className='beer-filter__inner-container'>
            <div className='beer-characteristics-filter'>
                <p className='filter-results-header'>Filter results</p>
                <div className='alchohol'>
                    <p className='characteristic-name'>Alcohol by volume</p>
                    <span>{ alcohol }</span>
                    <input className='characteristic-value' type="range" min="2" max="14" value= { alcohol } onChange={ (e) => setAlcohol(Number(e.target.value)) } onMouseUp={ () => filterBeers(alcohol, bitterness, colorEbc) }></input>
                </div>
                <div className='bitterness'>
                    <p className='characteristic-name'>International Bitterness Units</p>
                    <span>{ bitterness }</span>
                    <input className='characteristic-value' type="range" min="0" max="120" value={ bitterness } onChange={ (e) => setBitterness(Number(e.target.value)) } onMouseUp={ () => filterBeers(alcohol, bitterness, colorEbc) }></input>
                </div>
                <div className='color-ebc'>
                    <p className='characteristic-name'>Color By EBC</p>
                    <span>{ colorEbc }</span>
                    <input className='characteristic-value' type="range" min="4" max="80" value={ colorEbc } onChange={ (e) => setColor(Number(e.target.value)) } onMouseUp={ () => filterBeers(alcohol, bitterness, colorEbc) }></input>
                </div>
            </div>
        </div>
    </div>
)
}

const mapStateToProps = state => ({
    alcohol: state.filter.alcohol,
    bitterness: state.filter.bitterness,
    colorEbc: state.filter.color
})

const mapDispatchToProps = dispatch => ({
    setAlcohol: (value) => dispatch(setAlcohol(value)),
    setBitterness: (value) => dispatch(setBitterness(value)),
    setColor: (value) => dispatch(setColor(value)),
    filterBeers: (alcohol, bitterness, color) => dispatch(filterBeers(alcohol, bitterness, color)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

