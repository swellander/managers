import React from 'react';
import { render } from 'react-dom';
import Main from './Main';
import { HashRouter as Router } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Main />
    </Router>
  )
}

render(<App />, document.getElementById('app'));




