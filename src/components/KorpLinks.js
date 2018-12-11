import React from 'react';
import { css } from 'react-emotion';
import { Set } from 'immutable';
import { List, ListItemText, Paper, Typography } from '@material-ui/core';

const korpLangs = Set.of('sma', 'sme', 'smj', 'smn', 'sms');

const KorpLink = (lang, lemma, key) => {
  const searchString = `Show ${lemma} in Korp`;
  const korpAddress = (lang !== 'sme' && korpLangs.has(lang))
                        ? `http://gtweb.uit.no/korp/?mode=${lang}#?search=cqp|[lemma%3D"${lemma}"]`
                        : `http://gtweb.uit.no/korp/#?search=cqp|[lemma%3D"${lemma}"]`;
  return (
    <ListItemText key={key}><a href={korpAddress} target='_blank'>{searchString}</a></ListItemText>
  );
};

const KorpLinks = ({stems}) => {
  const validStems = stems.filter((stem) => korpLangs.has(stem.lang));
  return (
    <Paper>
      <Typography variant='body2'>Korp findings</Typography>
      <List>
        {stems
          .filter((stem) => korpLangs.has(stem.lang))
          .map((stem, index) => KorpLink(stem.lang, stem.lemma, index))}
      </List>
    </Paper>
  );
};

export default KorpLinks;
