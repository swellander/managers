import React, { Component } from 'react';
import axios from 'axios';

export default class UserDetail extends Component {
  state = {
    user: {} 
  }

  componentDidMount = () => {
    axios.get(`/api/users/${this.props.id}`)
      .then(response => response.data)
      .then(user => this.setState({user}))
  }

  render = () => <h3>{JSON.stringify(this.state.user)}</h3>;
}
