import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';

import AsyncApp from './AsyncApp';
import Inflection from './Inflection';
import ErrorBoundary from '../components/ErrorBoundary';
import I18nLoader from './I18nLoader';

const NoMatch = () => <Redirect to='/' />;

const Root = ({ store }) => (
  <Provider store={store}>
    <I18nLoader>
      <ErrorBoundary>
        <Router>
          <Switch>
            <Route path='/' exact component={AsyncApp} />
            <Route path='/article/:lemma' component={AsyncApp} />
            <Route path='/inflection/:lemma' component={Inflection} />
            <Route path='*' component={NoMatch} />
          </Switch>
        </Router>
      </ErrorBoundary>
    </I18nLoader>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default Root;
