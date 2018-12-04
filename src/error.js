import React, { Component } from 'react';
import logo from './logo.png';
import Typography from '@material-ui/core/Typography';

class Registration extends Component {
  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <Typography variant="h5" gutterBottom>
          Http 404 <br />
          File Not Found
        </Typography>

      </div>
    );
  }
}

export default Registration;
