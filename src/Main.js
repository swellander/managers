import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Users from './Users';
import UserDetail from './UserDetail';

export default class Main extends Component {
  state = {
    users: [] 
  }

  componentDidMount() {
    axios.get('/api/users')
      .then(response => response.data)
      .then(users => this.setState({ users }))
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
        <Route path='/users/:id' render={({ match }) => <UserDetail id={match.params.id} />} />
      </div>
    )
  }
}
