import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '../app/configureStore';

import Home from '../modules/Home';
import PageExample from '../modules/Example';
import { AppRoot } from './App.styled';

import '../styles/normalize.css';
import '../styles/typography.css';

const store = configureStore();

export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <AppRoot>
            <Route
              component={Home}
              exact
              path='/'
            />
            <Route
              component={PageExample}
              path='/page-example'
            />
          </AppRoot>
        </Router>
      </Provider>
    );
  }
}

export default App;
