import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { I18nProvider } from '@lingui/react';
import AsyncApp from './AsyncApp';
import ErrorBoundary from '../components/ErrorBoundary';

const NoMatch = () => <Redirect to='/' />;

const Root = ({ store }) => (
  <I18nProvider language='en'>
    <Provider store={store}>
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
    </Provider>
  </I18nProvider>
    );

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
