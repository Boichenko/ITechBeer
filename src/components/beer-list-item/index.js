import React, { Component } from 'react';
import './index.css';
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux';

const BeerListItem = ({ beer }) => (
    <li className="beer-item">
        <div className="beer-item__container">
            <img className="beer-item__logo" src={beer.image_url}/>

                <div className="beer-item__data-container">
                    <div className="beer-item__information">
                        <div className="beer-item__header">{beer.name}</div>
                        <br />
                        <span>{beer.tagline}</span>
                    </div>

                <button className="action-button"><NavLink beerItem={beer} to={`/beer?${beer.id}`}>open</NavLink></button>
                <button className="action-button"><NavLink to={`/beer?${beer.id}`}>add to favorites</NavLink></button>
            </div>
        </div>
    </li>
)

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({})

export default connect(
        mapStateToProps, mapDispatchToProps
)(BeerListItem);
