import React, { Component } from 'react';
import './index.css';
import Loader from "../loader";
import BeerItem from "../beer-item";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.page = 1;

    this.state = {
      beers: [],
      loadingState: false,
      beer_count: 9,
      page: 1
    };  
  }

  componentDidMount() {
    this.loadMoreItems();

      this.refs.isScroll.addEventListener("scroll", () => {
      console.log("working");
      console.log(this.refs.isScroll.scrollTop );
      console.log(this.refs.isScroll.clientHeight);
      console.log(this.refs.isScroll.scrollHeight);

      if (this.refs.isScroll.scrollTop 
          + this.refs.isScroll.clientHeight >= this.refs.isScroll.scrollHeight-200) {
        this.loadMoreItems();
      }
    });
  }

  loadMoreItems() {
    if (this.state.loadingState) {
      return;
    }

    this.setState({ loadingState: true });
    const api_url = `https://api.punkapi.com/v2/beers?page=${this.state.page}&per_page=${this.state.beer_count}`;

    fetch(api_url)
      .then(response=>response.json())
      .then(data => (
          this.setState(
          { 
            beers: this.state.beers.concat(data), 
            loadingState: false,
            page: this.state.page + 1
          })
        )
      );
  }

  render() {
    return (
      <main className="main-content" ref="isScroll">
          <ul className="beers-list">
              { this.state.beers.map(function (beer, index) {
                  return ( 
                      <BeerItem key={index} item = {beer} />
                    )
                  }
                )
              }
          </ul>
          {this.state.loadingState && <Loader />}
      </main>
    )
  }
}

export default Dashboard;