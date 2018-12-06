import React from 'react';
import styled, { css } from 'react-emotion';
import { Trans } from '@lingui/macro';
import Searcher from '../components/Searcher';
import Articles from '../components/Articles';
import AppBar from '../components/AppBar';

const AsyncApp = ({match}) => (
  <div>
    <AppBar />
    {match.params.lemma ?
      <Articles lemma={match.params.lemma} /> :
    null
  }
    <footer>
      <Trans>
  Sámi dictionaries and terms delivered by<br />
        <a href='http://divvun.no'>Divvun</a>, <a href='http://giella.org'>Giellagáldu</a> and <a href='http://giellatekno.uit.no'>Giellatekno</a>
      </Trans>
    </footer>
  </div>
);

export default AsyncApp;
