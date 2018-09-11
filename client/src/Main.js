import React, { Component } from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Bannermen from './Bannermen';
import Create from './Create';

export default class Main extends Component {
  state = {
    bannermen: [],
    redirect: false
  }

  componentDidMount() {
    axios.get('/api/bannermen')
      .then(response => response.data)
      .then(bannermen => this.setState({ bannermen }))
  }

  addCharacter = (name, lordId) => {
    return axios.get(`https://api.got.show/api/characters/${name}`)
      .then(response => response.data.data)
      .then(character => {
        axios.post(`/api/bannermen`, {...character, lordId})
          .then(response => response.data)
          .then(bannerman => {
            this.setState({
              bannermen: [...this.state.bannermen, bannerman],
              redirect: true
            })

          })
      })
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
    if (this.state.redirect) {
      this.setState({ redirect: false })
      return <Redirect push to='/bannermen' />;
    }
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
        <Route
          path='/create'
          render={() => (
            <Create 
              addCharacter={this.addCharacter} 
              bannermen={this.state.bannermen}
            />
          )}
        />
      </div>
    )
  }
}
