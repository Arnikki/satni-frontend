import React from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import AsyncApp from './AsyncApp';
import ErrorBoundary from '../components/ErrorBoundary';
import I18nLoader from './I18nLoader';
import withRoot from '../components/withRoot';

const NoMatch = () => <Redirect to='/' />;

const styles = theme => ({
  root: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 20
  }
});

const Root = ({ store, classes }) => (
  <Provider store={store}>
    <I18nLoader>
      <div className={classes.root}>
        <ErrorBoundary>
          <Router>
            <Switch>
              <Route path='/' exact component={AsyncApp} />
              <Route path='/article/:lemma' component={AsyncApp} />
              <Route path='*' component={NoMatch} />
            </Switch>
          </Router>
        </ErrorBoundary>
      </div>
    </I18nLoader>
  </Provider>
);

Root.propTypes = {
  store: PropTypes.object.isRequired,
  classes: PropTypes.object.isRequired
};

export default withRoot(withStyles(styles)(Root));
