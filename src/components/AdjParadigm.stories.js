import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import AdjParadigm from './AdjParadigm';
import {
  resultSmaNounParadigm,
  resultSmeNounParadigm,
  resultSmjNounParadigm,
  resultSmnNounParadigm
} from '../utils_testdata';

storiesOf('AdjParadigm', module)
  .add('Inari saami adjective', () => <AdjParadigm paradigm={resultSmnNounParadigm} />);