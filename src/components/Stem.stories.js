import React from 'react';
import { I18nProvider } from '@lingui/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter as Router } from 'react-router-dom';

import Stem from './Stem';

const stem = { lemma: 'guolli', pos: 'N', lang: 'sme', key: 0};

storiesOf('Stem', module)
  .add('default', () => <Router>
    <I18nProvider>
      <Stem stem={stem} />
    </I18nProvider>
  </Router>)
  .add('key_nonzero', () => <Router>
    <I18nProvider>
      <Stem stem={{...stem, key: 1}} />
    </I18nProvider>
  </Router>)
  .add('lang_nonsme', () => <Router>
    <I18nProvider>
      <Stem stem={{...stem, lang: 'smj'}} />
    </I18nProvider>
  </Router>)
  .add('non_sami', () => <Router>
    <I18nProvider>
      <Stem stem={{...stem, lang: 'nob'}} />
    </I18nProvider>
  </Router>);
