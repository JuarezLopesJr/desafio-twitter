import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import HeaderPage from './components/HeaderPage';
import HomePage from './components/HomePage';
import MapPage from './components/MapPage';
import { fetchUser } from './actions';

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { location } = this.props;
    return (
      <div>
        <HeaderPage />
        <Route location={location} exact path="/" component={HomePage} />
        <Route
          location={location}
          exact
          path="/dashboard"
          component={MapPage}
        />
      </div>
    );
  }
}

export default connect(null, { fetchUser })(App);
