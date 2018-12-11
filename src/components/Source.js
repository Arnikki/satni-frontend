import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Trans } from '@lingui/macro';

const nds = {
  finsme: 'http://sanit.oahpa.no/detail/fin/sme',
  finsmn: 'http://saanih.oahpa.no/detail/fin/smn',
  nobsma: 'http://baakoeh.oahpa.no/detail/nob/sma',
  nobsme: 'http://sanit.oahpa.no/detail/nob/sme',
  smanob: 'http://baakoeh.oahpa.no/detail/sma/nob',
  smefin: 'http://sanit.oahpa.no/detail/sme/fin',
  smenob: 'http://sanit.oahpa.no/detail/sme/nob',
  smesmn: 'http://saanih.oahpa.no/detail/sme/smn',
  smnfin: 'http://saanih.oahpa.no/detail/smn/fin',
  smnsme: 'http://saanih.oahpa.no/detail/smn/sme'
};

const terms = {

};

const Source = ({source, termwikiref, lemma}) => {
  const address = source === 'termwiki'
    ? `https://satni.uit.no/termwiki/index.php?title=${termwikiref}`
    : `${nds[source]}/${lemma}.html`;

  const description = source === 'termwiki'
    ? <Trans>This article on the TermWiki</Trans>
    : <Trans>This article on the Neahttadigisánit</Trans>;

  return (
    <Typography align='center' variant='body2'>
      <a href={address} target='_blank'>{description}</a>
    </Typography>
  );
};

export default Source;
