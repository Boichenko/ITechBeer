import React from 'react';
import { connect } from 'react-redux';

import './index.css';

const MethodList = (method) => (
    <div className='method'>
        <span>Method</span>
            <ul className='method-list'>
            { Object.keys(method).map((key, index)=>(
                <li key={index} className='method-list-item'>
                    <span className='method-category'>{key}</span>
                    {method[key].map((value, index)=>( 
                        <span key={index} className='method-value'>{value}</span>
                    ))}
                </li>
            ))}
            </ul>
     </div>
)

const mapStateToProps = state => ({
    method: state.beer.method,
})

export default connect(
    mapStateToProps,
    null
)(MethodList)