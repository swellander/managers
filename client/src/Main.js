import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import Header from './Header';
import Bannermen from './Bannermen';

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
        <Header bannermen={this.state.bannermen} />
        <Route
          path='/bannermen'
          render={() =>
            <Bannermen remove={this.deleteUser}
              bannermen={this.state.bannermen}
            />}
        />
      </div>
    )
  }
}
