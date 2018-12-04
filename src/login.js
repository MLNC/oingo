import React, { Component } from 'react';
import logo from './logo.png';
import { TextField, Button } from '@material-ui/core';
import { Redirect } from 'react-router'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      toMain: false
    };
  }

  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState(() => ({toMain: true}));
    //TODO Login API
  }

  render() {
    if (this.state.toMain === true){
      return (
        <Redirect to={{
            pathname: "/main",
            state: { username: this.state.username }
          }} />
      );
    }

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
          <br /> <br />
          <Button variant="contained" color="primary" disabled={!this.validateForm()} type="submit">
            Login
          </Button>
          <br /> <br />
        </form>
        <Button variant="contained" color="secondary" href="/registration">
          Sign up
        </Button>
      </div>
    );
  }
}

export default Login;
