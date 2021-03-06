import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

const Methods = ({method}) =>  { return(
    <div className='method'>
        <p className='method-header'>Method</p>
            <ul className='method-list'>
                <li className='method-list-item'>
                    <div className='method-list-item__container'>
                        <p className='method-category'>Mash</p>
                        { Array.isArray( method['mashTemp'] ) ? method['mashTemp'].map(( item, index ) => ( 
                            <p key={index} className='method-value'>{ item.duration } minutes at { item.temp.value } { item.temp.unit === 'celsius' ? 'C' : 'F' }&ordm;</p> 
                        )) : null
                        }
                    </div>
                </li>
                <li className='method-list-item'>
                    <div className='method-list-item__container'>
                        <p className='method-category'>Fermentation</p>
                        <p className='method-value'>Perform at { method['fermentation'].temp.value } { method['fermentation'].temp.unit === 'celsius' ? 'C' : 'F' }&ordm;</p> 
                    </div>
                </li>
                { method['twist']!=null && 
                    <li className='method-list-item'>
                        <div className='method-list-item__container'>
                            <p className='method-category'>Twist</p>
                            <p className='method-value'>{method['twist'] }</p> 
                        </div>
                    </li> }
            </ul>
     </div>
)}

Methods.propTypes = {
    method: PropTypes.array.isRequired
}

export default React.memo(Methods);
