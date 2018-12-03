import React from 'react';
import { connect } from 'react-redux';

import './index.css';

const Ingredients = ({ingredients}) => { console.log(ingredients); return(
    <div className='ingredients'>
        <p className='ingredients-header'>Ingredients</p>
        <ul className='ingredients-list'>
        { Object.keys(ingredients).map((item, index)=>(
            <li key={index} className='ingredients-list-item bordered-circle'>
                <div className='ingredients-list-item__container'>
                    <span className='ingredient-category'>{item}</span>
                    { Array.isArray(ingredients[item]) ?  ingredients[item].map((value, index)=>( 
                        <span key={item+index} className='ingredient-value'>{value.name}</span>
                    )) : <span className='ingredient-value'>{ingredients[item]}</span>}
                </div>
            </li>
            ))}
        </ul>
    </div>
)
                }

const mapStateToProps = state => ({
    ingredients: state.beer.beer.ingredients,
})

export default connect(
    mapStateToProps,
    null
)(Ingredients)