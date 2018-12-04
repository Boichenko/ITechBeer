import React from 'react';
import { connect } from 'react-redux';

import './index.css';

const Ingredients = ({ ingredients }) => (
    <div className='ingredients'>
        <p className='ingredients-header'>Ingredients</p>
        <ul className='ingredients-list'>
        { Object.keys(ingredients).map(( item, index ) => (

            <li key={index} className='ingredients-list-item bordered-circle'>
                <div className='ingredients-list-item__container'>
                    <p className='ingredient-category'>{ item }</p> <br/>
                    { Array.isArray(ingredients[item]) ?  ingredients[item].map(( value, index ) => ( 
                        <p key={ item+index } className='ingredient-value'>{ value.name }<br/></p> 
                    )) : <p className='ingredient-value'>{ ingredients[item] }</p>}
                </div>
            </li>

            )) }
        </ul>
    </div>
)

const mapStateToProps = state => ({
    ingredients: state.beer.beer.ingredients,
})

export default connect(
    mapStateToProps,
    null
)(Ingredients)