import React from 'react';
import { I18nProvider } from '@lingui/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

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

const articles = [];

storiesOf('PresentArticles', module)
  .add('DictArticle with examples', () => <I18nProvider>
    <PresentArticles
      articles={[resultDictWithExamples[0]]} />
  </I18nProvider>)
  .add('DictArticle without examples', () => <I18nProvider>
    <PresentArticles
      articles={[resultDictWithoutExamples[0]]} />
  </I18nProvider>)
  .add('Only TermWikiArticle', () => <I18nProvider>
    <PresentArticles
      articles={[resultTermWiki]} />
  </I18nProvider>)
  .add('Only SDTermArticle', () => <I18nProvider>
    <PresentArticles
      articles={[resultSDTerm]} />
  </I18nProvider>)
  .add('SDTerm, t is no array', () => <I18nProvider>
    <PresentArticles
      articles={[resultFordel]} />
  </I18nProvider>)
  .add('Only mekanikk99', () => <I18nProvider>
    <PresentArticles
      articles={[resultMekanikk99]} />
  </I18nProvider>)
  .add('Only JustermTana', () => <I18nProvider>
    <PresentArticles
      articles={[resultJustermTana]} />
  </I18nProvider>)
  .add('All types', () => <I18nProvider>
    <PresentArticles
      articles={[
        resultDictWithExamples[0],
        resultDictWithoutExamples[0],
        resultTermWiki,
        resultSDTerm,
        resultMekanikk99,
        resultJustermTana
      ]} />
  </I18nProvider>);
