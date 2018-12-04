import React, { Component } from 'react';
import logo from './logo.png';
import {TextField, Button} from '@material-ui/core';

class Registration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email:"",
      state:"",
      city:""
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0 && this.state.email.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    //TODO Registration API
  }

  render() {
    return (
      <div className="App">
        <img src={logo} className="App-logo" alt="logo" />
        <form autoComplete="off" onSubmit={this.handleSubmit}>
          <TextField
            required
            id="username"
            label="Username"
            margin="normal"
            variant="outlined"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            required
            id="password"
            label="Password"
            type="password"
            margin="normal"
            variant="outlined"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            required
            id="email"
            label="Email"
            type="email"
            margin="normal"
            variant="outlined"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            id="state"
            label="State"
            margin="normal"
            variant="outlined"
            value={this.state.state}
            onChange={this.handleChange}
          />
          <br/>
          <TextField
            id="city"
            label="City"
            margin="normal"
            variant="outlined"
            value={this.state.city}
            onChange={this.handleChange}
          />
          <br/>
          <br /> <br />
          <Button variant="contained" color="primary" disabled={!this.validateForm()} type="submit">
            Sign up
          </Button>
          <br /> <br />
        </form>
        <Button variant="contained" color="secondary" href="/">
          Back
        </Button>
      </div>
    );
  }
}

export default Registration;
