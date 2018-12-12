import React from 'react';
import { I18nProvider } from '@lingui/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { BrowserRouter as Router } from 'react-router-dom';

import PresentArticles from './PresentArticles';
import {
  resultSDTerm,
  resultDictWithExamples,
  resultDictWithoutExamples,
  resultTermWiki,
  resultMekanikk99,
  resultJustermTana,
  resultFordel
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
  .add('Only SDTermArticle', () => <Router>
    <I18nProvider language='se' catalogs={catalogs}>
      <PresentArticles
        articles={[resultSDTerm]} />
    </I18nProvider>
  </Router>)
  .add('SDTerm, t is no array', () => <Router>
    <I18nProvider language='se' catalogs={catalogs}>
      <PresentArticles
        articles={[resultFordel]} />
    </I18nProvider>
  </Router>)
  .add('Only mekanikk99', () => <Router>
    <I18nProvider language='se' catalogs={catalogs}>
      <PresentArticles
        articles={[resultMekanikk99]} />
    </I18nProvider>
  </Router>)
  .add('Only JustermTana', () => <Router>
    <I18nProvider language='se' catalogs={catalogs}>
      <PresentArticles
        articles={[resultJustermTana]} />
    </I18nProvider>
  </Router>)
  .add('All types', () => <Router>
    <I18nProvider language='se' catalogs={catalogs}>
      <PresentArticles
        articles={[
          resultDictWithExamples[0],
          resultDictWithoutExamples[0],
          resultTermWiki,
          resultSDTerm,
          resultMekanikk99,
          resultJustermTana
        ]} />
    </I18nProvider>
  </Router>);
