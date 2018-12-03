import React from 'react';
import { connect } from 'react-redux';

import './index.css';

const Ingredients = ({ingredients}) => (
    <div className='ingredients'>
        <span>Ingredients</span>
        <ul className='ingredients-list'>
        { Object.keys(ingredients).map((key, index)=>(
            <li key={index} className='ingredients-list-item bordered-circle'>
                <span className='ingredient-category'>{key}</span>
                {ingredients[key].map((value, index)=>( 
                <span className='ingredient-value'>{value}</span>
                ))}
            </li>
            ))}
        </ul>
    </div>
)

const mapStateToProps = state => ({
    ingredients: state.beer.ingredients,
})

export default connect(
    mapStateToProps,
    null
)(Ingredients)