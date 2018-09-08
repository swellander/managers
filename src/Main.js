import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Users from './Users';

export default class Main extends Component {
  state = {
    users: [] 
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(response => response.data)
      .then(users => this.setState({ users }))
  }

  render() {
    return (
      <div>
        <Link to="/users"><h3>Users({this.state.users.length})</h3></Link> 
        <hr/>
        <Route path='/users' render={() => <Users users={this.state.users} /> } />
      </div>
    )
  }
}
