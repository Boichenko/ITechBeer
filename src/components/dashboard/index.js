import React, { useEffect } from 'react';
import PropTypes from 'prop-types'
import { List } from 'immutable'

import './index.css';
import Loader from "../loader";
import Filter from "../../containers/filter";
import BeerListItem from "../../containers/beer-list-item"

const Dashboard = ({ beers, fetchBeers, isFetching, error, filterError, favorites, isFiltered }) => {
    let dashboard, list;

    useEffect(() => {
        if (list.clientHeight < dashboard.clientHeight && !isFetching && !isFiltered) {
            fetchBeers();
        }
    })

    const handleScroll = () => {
        if (!isFetching && dashboard.scrollTop +
            dashboard.clientHeight >= dashboard.scrollHeight - 10 && !isFiltered) {
            fetchBeers();
        }
    }

    const isBeerItemFavorite = (beerId) => {
        return favorites.includes(beerId)
    }

    return (
        <main className="main-content" ref={(node) => dashboard = node} onScroll={handleScroll}>
            <div className="main-content__container">
                <Filter />
                <ul className="beers-list" ref={(item) => list = item}>
                    {beers.map((beer, index) => {
                        return (
                            <BeerListItem key={index} beer={beer} isFavorite={isBeerItemFavorite(beer.id)} />
                        )
                    })
                    }
                </ul>
                {isFetching && !error && <Loader />}
            </div>
            {(error || filterError) &&
                <div className="error-message__container">
                    <span className="error-message">Oops! We have an error. <br />Please, try to reload page</span>
                </div>
            }
        </main>
    )
}


Dashboard.propTypes = {
    isFiltered: PropTypes.bool.isRequired,
    favorites: PropTypes.instanceOf(List),
    beers: PropTypes.instanceOf(List),
    isFetching: PropTypes.bool.isRequired,
    error: PropTypes.string,
    filterError: PropTypes.string,
    fetchBeers: PropTypes.func.isRequired
}

export default React.memo(Dashboard)