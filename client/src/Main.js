import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Bannermen from './Bannermen';
import Bannerman from './Bannerman';

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
    console.log('deleting bannerman of id: ', id);
    axios.delete(`/api/users/${id}`)
      .then(() => {
        const newUsers = this.state.users.filter(user => user.id !== id);
        this.setState({ users: newUsers })
      })
  }

  render() {
    return (
      <div>
        <Link to="/users"><h3>Bannermen({this.state.users.length})</h3></Link>
        <hr />
        <Route path='/users' render={() => <Bannermen remove={this.deleteUser} users={this.state.users} />} />
      </div>
    )
  }
}
