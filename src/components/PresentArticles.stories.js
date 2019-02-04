import React from 'react';
import { I18nProvider } from '@lingui/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter as Router } from 'react-router-dom';

import PresentArticles from './PresentArticles';
import {
  resultDictWithExamples,
  resultDictWithoutExamples,
  resultTermWiki
} from '../utils_testdata';
import catalogSe from '../locales/se/messages.js';
const catalogs = { se: catalogSe };

const articles = [];

storiesOf('PresentArticles', module)
  .add('DictArticle with examples', () => <Router>
    <I18nProvider language='se' catalogs={catalogs}>
      <PresentArticles
        articles={[resultDictWithExamples[0]]} />
    </I18nProvider>
  </Router>)
  .add('DictArticle without examples', () => <Router>
    <I18nProvider language='se' catalogs={catalogs}>
      <PresentArticles
        articles={[resultDictWithoutExamples[0]]} />
    </I18nProvider>
  </Router>)
  .add('Only TermWikiArticle', () => <Router>
    <I18nProvider language='se' catalogs={catalogs}>
      <PresentArticles
        articles={[resultTermWiki]} />
    </I18nProvider>
  </Router>)
  .add('All types', () => <Router>
    <I18nProvider language='se' catalogs={catalogs}>
      <PresentArticles
        articles={[
          resultDictWithExamples[0],
          resultDictWithoutExamples[0],
          resultTermWiki
        ]} />
    </I18nProvider>
  </Router>);
