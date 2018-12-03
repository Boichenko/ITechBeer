import React from 'react';
import { connect } from 'react-redux';

import './index.css';

const MethodList = ({method}) =>  { console.log(method); return(
    <div className='method'>
        <p className='method-header'>Method</p>
            <ul className='method-list'>
            { Object.keys(method).map((key, index)=>(
                <li key={index} className='method-list-item'>
                    <div className='method-list-item__container'>
                        <span className='method-category'>{key}</span>
                        {Array.isArray(method[key]) ? method[key].map((item, index)=>( 
                            <span key={index} className='method-value'>{item.temp.value}</span> 
                        ))
                            : <span className='method-value'>item</span>
                        }
                    </div>
                </li>
            ))}
            </ul>
     </div>
)}

const mapStateToProps = state => ({
    method: state.beer.beer.method,
})

export default connect(
    mapStateToProps,
    null
)(MethodList)