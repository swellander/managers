import React from 'react';
import { render } from 'react-dom';
import Main from './Main';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';

const App = () => {
  return (
    <Router>
      <Provider store={store}>
        <Main />
      </Provider>
    </Router>
  )
}

render(<App />, document.getElementById('app'));




