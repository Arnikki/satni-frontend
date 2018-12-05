import React from 'react';
import { I18nProvider } from '@lingui/react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Source from './Source';

const source = 'smenob';

storiesOf('Source', module)
  .add('default', () => <I18nProvider>
    <Source source={source} />
  </I18nProvider>);
