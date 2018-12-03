import React, { Component } from 'react';
import './index.css';
import { Link } from 'react-router-dom'
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

                <Link to={`/beer/${beer.id}`}>open</Link>
                <Link to={`/${beer.id}`}>add to favorites</Link>
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
