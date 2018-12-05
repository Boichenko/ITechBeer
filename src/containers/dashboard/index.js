import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import './index.css';
import Loader from "../../components/loader";
import BeerListItem from "../beer-list-item";
import { fetchBeers } from '../../reducers/dashboard/actions'

const Dashboard = ({beers = [], fetchBeers, isFetching, error, favorites }) => {
  let dashboard, list;

  useEffect(() => {    
    if (list.clientHeight < dashboard.clientHeight && !isFetching)
    {
      fetchBeers();
    }
  })

  const handleScroll = () => {
    if (!isFetching && dashboard.scrollTop +
      dashboard.clientHeight >= dashboard.scrollHeight - 10) {
      fetchBeers();
    }
  }

  const isBeerItemFavorite = (beerId) => {
    return _.includes(favorites, beerId)
  }

  return(
      <main className="main-content" ref={ (node) => dashboard = node } onScroll={ handleScroll }>
        <div className="main-content__container">
          <ul className="beers-list" ref={ (item) => list = item }>
            { beers.map((beer, index) => { return (
                <BeerListItem key={index} beer={ beer } isFavorite = { isBeerItemFavorite(beer.id) } />
              )} )
            }
          </ul>
          {isFetching && !error && <Loader />}
        </div>
        { error && 
            <div className="error-message__container">
              <span className="error-message">Oops! We have an error. <br/>Please, try to reload page</span>
            </div>
        }
      </main> 
  )
}

const mapStateToProps = state => ({
  beers: state.dashboard.beers,
  isFetching: state.dashboard.isFetching,
  error: state.dashboard.error,
  favorites: state.favorites.beerItems
})

const mapDispatchToProps = dispatch => ({
    fetchBeers: () => dispatch(fetchBeers())
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(Dashboard);