import React, { Component } from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Bannermen from './Bannermen';
import Create from './Create';
import Update from './Update';
import store, { initBannermen, createBannerman } from './store';
import { connect } from 'react-redux';

class Main extends Component {
  state = {
    redirect: false
  }
  componentDidMount() {
    store.dispatch(initBannermen());
  }
  addCharacter = (name, lordId) => {
    store.dispatch(createBannerman(name, lordId))
  }
  updateCharacter = (id, character) => {
    alert('updating')
  }
  deleteUser = (id) => {
    console.log('deleting bannerman of id: ', id);
    axios.delete(`/api/bannermen/${id}`)
      .then(() => {
        const newBannermen = this.props.bannermen.filter(bannerman => bannerman.id !== id);
        this.setState({ bannermen: newBannermen })
      })
  }
  static defaultProps = {
    bannermen: []
  }
  render() {
    if (this.state.redirect) {
      this.setState({ redirect: false })
      return <Redirect push to='/bannermen' />;
    }
    return (
      <div>
        <Header bannermen={this.props.bannermen} />
        <Route
          path='/bannermen'
          render={() =>
            <Bannermen
              remove={this.deleteUser}
              bannermen={this.props.bannermen}
            />}
        />
        <Route
          path='/create'
          render={() => (
            <Create
              addCharacter={this.addCharacter}
              bannermen={this.props.bannermen}
            />
          )}
        />
        <Route
          path='/update/:id'
          render={({ match }) => (
            <Update
              updateCharacter={this.updateCharacter}
              bannermen={this.props.bannermen}
              bannermanId={match.params.id}
            />
          )}
        />
      </div>
    )
  }
}

const mapStateToProps = state => (
  { ...state }
)

export default connect(mapStateToProps)(Main);