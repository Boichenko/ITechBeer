import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';

import './index.css';
import Loader from "../../components/loader";
import Filter from "../filter";
import BeerListItem from "../beer-list-item";
import { fetchBeers, fetchBeersByName } from '../../reducers/dashboard/actions'

const Dashboard = ({beers = [], fetchBeers, isFetching, error, favorites, searchBeers, isSearched }) => {
  let dashboard, list, searchName;

  useEffect(() => {    
    if (list.clientHeight < dashboard.clientHeight && !isFetching && !isSearched)
    {
      fetchBeers();
    }
  })

  const handleScroll = () => {
    if (!isFetching && dashboard.scrollTop +
      dashboard.clientHeight >= dashboard.scrollHeight - 10 && !isSearched) {
      fetchBeers();
    }
  }

  const isBeerItemFavorite = (beerId) => {
    return _.includes(favorites, beerId)
  }

  const submitSearch = (e) => {
      e.preventDefault()
      let searchValue = searchName.value;
      if (!searchValue.trim()) {
        return
      }
      searchBeers(searchValue);
      searchName.value = ''
  }

  return(
      <main className="main-content" ref={ (node) => dashboard = node } onScroll={ handleScroll }>
        <div className="main-content__container">
          <div className='beer-name-filter__container'>
              <form onSubmit={ submitSearch} >
                <input ref={ node => searchName = node }  type='text' placeholder='Enter Beer Name...' className='beer-name-input'></input>
                <button type="submit" className='search-button'><i className="icon-search" /></button>
              </form>
              {isSearched && <Filter/>}
          </div>
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
  favorites: state.favorites.beerItemIds,
  isSearched: state.dashboard.isSearched
})

const mapDispatchToProps = dispatch => ({
    fetchBeers: () => dispatch(fetchBeers()),
    searchBeers: (name) => dispatch(fetchBeersByName(name))
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(Dashboard);