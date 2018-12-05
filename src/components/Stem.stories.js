import React from 'react';
import { I18nProvider } from '@lingui/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Stem from './Stem';

const stem = { lemma: 'guolli', pos: 'N', lang: 'sme', key: 0};

storiesOf('Stem', module)
  .add('default', () => <I18nProvider>
    <Stem stem={stem} />
  </I18nProvider>)
  .add('key_nonzero', () => <I18nProvider>
    <Stem stem={{...stem, key: 1}} />
  </I18nProvider>)
  .add('lang_nonsme', () => <I18nProvider>
    <Stem stem={{...stem, lang: 'smj'}} />
  </I18nProvider>)
  .add('non_sami', () => <I18nProvider>
    <Stem stem={{...stem, lang: 'nob'}} />
  </I18nProvider>);
