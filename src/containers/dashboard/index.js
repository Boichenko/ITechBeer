import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import './index.css';
import Loader from "../../components/loader";
import BeerListItem from "../beer-list-item";
import {fetchBeers} from '../../reducers/dashboard/actions'

const Dashboard = ({beers = [], fetchBeers, isFetching, error }) => {
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

  return(
      <main className="main-content" ref={ (node) => dashboard = node } onScroll={handleScroll}>
        <div className="main-content__container">
          <ul className="beers-list" ref={ (item) => list = item }>
            { beers.map((beer, index) => (
                <BeerListItem key={index} beer={beer} />
              ))
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
  error: state.dashboard.error
})

const mapDispatchToProps = dispatch => ({
  fetchBeers: () => dispatch(fetchBeers())
})

export default connect(
  mapStateToProps, mapDispatchToProps
)(Dashboard);