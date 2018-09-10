import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Bannermen from './Bannermen';
import Bannerman from './Bannerman';

export default class Main extends Component {
  state = {
    bannermen: []
  }

  componentDidMount() {
    axios.get('/api/bannermen')
      .then(response => response.data)
      .then(bannermen => this.setState({ bannermen }))
  }

  deleteUser = (id) => {
    console.log('deleting bannerman of id: ', id);
    axios.delete(`/api/bannermen/${id}`)
      .then(() => {
        const newBannermen = this.state.bannermen.filter(bannerman => bannerman.id !== id);
        this.setState({ bannermen: newBannermen })
      })
  }

  render() {
    return (
      <div>
        <Link to="/bannermen"><h3>Bannermen({this.state.bannermen.length})</h3></Link>
        <hr />
        <Route path='/bannermen' render={() => <Bannermen remove={this.deleteUser} bannermen={this.state.bannermen} />} />
      </div>
    )
  }
}
