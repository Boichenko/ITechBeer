import React, { Component } from 'react';
import './index.css';

class BeerItem extends React.Component {
    render() {
        return (<li className="beer-item">
            <div className="beer-item__container">
                <img className="beer-item__logo" src={this.props.item.image_url}/>

                <div className="beer-item__data-container">
                    <div className="beer-item__information">
                            <div className="beer-item__header">{this.props.item.name}</div>
                            <br />
                            <span>{this.props.item.tagline}</span>
                    </div>

                    <button className="action-button">Open</button>
                    
                    <button className="action-button">Favorites</button>
                </div>
            </div>
        </li>
        );
    }
}

export default BeerItem;