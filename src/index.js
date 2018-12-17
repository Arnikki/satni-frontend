import 'babel-polyfill';

import * as Sentry from '@sentry/browser';
import React from 'react';
import { render } from 'react-dom';
import Root from './containers/Root';
import configureStore from './configureStore';
import { saveUiLanguage } from './localStorage';
import throttle from 'lodash/throttle';

const store = configureStore();
store.subscribe(throttle(() => {
  saveUiLanguage(store.getState().uiLanguage);
}, 1000));

Sentry.init({
  dsn: 'https://65960ebe11524e22b83637dfe43344a2@sentry.io/1303235'
});

render(
  <Root store={store} />,
  document.getElementById('root')
);
