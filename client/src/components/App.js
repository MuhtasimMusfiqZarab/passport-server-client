import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

import Landing from './Landing';

class App extends Component {
  state = {};

  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <Route path="/" exact component={Landing} />
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
