import React, { Component } from 'react';

class Dashboard extends React.Component {
    render() {
        return <h1>Dashboard, {this.props.name}</h1>
    }
}

export default Dashboard;