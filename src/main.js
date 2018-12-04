import React, { Component } from 'react';
import {BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import MapIcon from '@material-ui/icons/Map';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import Map from './map.js';
import Post from './post.js';
import Profile from './profile.js';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state={
      value: 0,
    }
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <div className="App">
        Username: {this.props.location.state.username}
        {value === 0 && <Map />}
        {value === 1 && <Post />}
        {value === 2 && <Profile />}
        <BottomNavigation
          value={value}
          onChange={this.handleChange}
          showLabels
          style={{width:'100%', position:'fixed', bottom:0}}
        >
          <BottomNavigationAction label="Map" icon={<MapIcon />}/>
          <BottomNavigationAction label="Post" icon={<AddCircleIcon />} />
          <BottomNavigationAction label="Profile" icon={<AccountCircleIcon />} />
        </BottomNavigation>
      </div>
    );
  }
}

export default Main;
