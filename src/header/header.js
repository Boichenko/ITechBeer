import React, { Component } from 'react';

class Header extends React.Component {
    render() {
        return <header>Header, {this.props.name}</header>
    }
}

export default Header;