import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Users from './Users';
import User from './User';

export default class Main extends Component {
  state = {
    users: {} 
  }

  convertToUserObj = (userArr) => {
    return userArr.reduce((acc, curr) => {
      const {id, ...user} = curr;
      acc[curr.id] = user;
      return acc;
    }, {})
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(response => response.data)
      .then(users => this.setState({ users: this.convertToUserObj(users) }))
  }

  deleteUser = (id) => {
    axios.delete(`/users/${id}`)
    
  }

  render() {
    return (
      <div>
        <Link to="/users"><h3>Users({Object.keys(this.state.users).length})</h3></Link> 
        <hr/>
        <Route path='/users' render={() => <Users users={this.state.users} /> } />
        <Route path='/users/:id' render={({ match }) => <User deleteUser={this.deleteUser} user={this.state.users[match.params.id]} />} />
      </div>
    )
  }
}
