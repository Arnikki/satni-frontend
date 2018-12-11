import React from 'react';
import { I18nProvider } from '@lingui/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import KorpLinks from './KorpLinks';

const stems = [
  { lemma: 'guolli', pos: 'N', lang: 'sme', key: 0},
  { lemma: 'guolle', pos: 'N', lang: 'smj', key: 1},
  { lemma: 'kyele', pos: 'N', lang: 'smn', key: 1}
];

storiesOf('KorpLinks', module)
  .add('default', () => <I18nProvider>
    <KorpLinks stems={stems} />
  </I18nProvider>);
