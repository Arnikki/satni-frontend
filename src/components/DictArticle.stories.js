import React from 'react';
import { I18nProvider } from '@lingui/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter as Router } from 'react-router-dom';
import DictArticle from './DictArticle';

const examples = [
  { x: 'original0', xt: 'translation0', key: 0 },
  { x: 'original1', xt: 'translation1', key: 0 }
];

const stem = { lemma: 'guolli', pos: 'N', lang: 'sme', key: 0};
const stems = [
  stem,
  {...stem, key: 1},
  {...stem, lang: 'nob'}
];

storiesOf('DictArticle', module)
  .add('default', () => <Router>
    <I18nProvider>
      <DictArticle stems={stems} examples={examples} dictionary='smenob' />
    </I18nProvider>
  </Router>)
  .add('without_examples', () => <Router>
    <I18nProvider>
      <DictArticle stems={stems} examples={[]} dictionary='smenob' />
    </I18nProvider>
  </Router>);
