import React from 'react';
import PropTypes from 'prop-types';

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

Ingredients.propTypes = {
    ingredients: PropTypes.array.isRequired
}


export default React.memo(Ingredients);