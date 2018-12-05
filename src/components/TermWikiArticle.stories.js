import React from 'react';
import { I18nProvider } from '@lingui/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import TermWikiArticle from './TermWikiArticle';

const stem = { lemma: 'guolli', pos: 'N', lang: 'sme', key: 0};
const stems = [
  stem,
  {...stem, key: 1},
  {...stem, lang: 'nob'}
];

storiesOf('TermWikiArticle', module)
  .add('default', () => <I18nProvider>
    <TermWikiArticle
      stems={stems}
      dictionary='termwiki'
      termwikiref='Luonddudieđa ja matematihkka:guolli' />
  </I18nProvider>);
