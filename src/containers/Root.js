import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AsyncApp from './AsyncApp';
import ErrorBoundary from '../components/ErrorBoundary';
import I18nLoader from './I18nLoader';

const NoMatch = () => <Redirect to='/' />;

const Root = ({ store }) => (
  <Provider store={store}>
    <I18nLoader>
      <MuiThemeProvider>
        <ErrorBoundary>
          <Router>
            <Switch>
              <Route path='/' exact component={AsyncApp} />
              <Route path='/article/:lemma' component={AsyncApp} />
              <Route path='*' component={NoMatch} />
            </Switch>
          </Router>
        </ErrorBoundary>
      </MuiThemeProvider>
    </I18nLoader>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
