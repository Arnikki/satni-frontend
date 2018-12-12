import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Trans, t } from '@lingui/macro';

// finsme: 'http://sanit.oahpa.no/detail/fin/sme',
// finsmn: 'http://saanih.oahpa.no/detail/fin/smn',
// nobsma: 'http://baakoeh.oahpa.no/detail/nob/sma',
// nobsme: 'http://sanit.oahpa.no/detail/nob/sme',
// smanob: 'http://baakoeh.oahpa.no/detail/sma/nob',
// smefin: 'http://sanit.oahpa.no/detail/sme/fin',
// smenob: 'http://sanit.oahpa.no/detail/sme/nob',
// smesmn: 'http://saanih.oahpa.no/detail/sme/smn',
// smnfin: 'http://saanih.oahpa.no/detail/smn/fin',
// smnsme: 'http://saanih.oahpa.no/detail/smn/sme'

const nds = [
  t`finsme`, t`finsmn`, t`nobsma`, t`nobsme`, t`smanob`, t`smefin`, t`smenob`,
  t`smesmn`, t`smnfin`, t`smnsme`, t`SD-terms`, t`mekanikk-1999`, t`termwiki`,
  t`JustermTana`
];

const Source = ({source}) => {
  return (
    <Typography align='center' variant='caption'>
      <Trans id={source} />
    </Typography>
  );
};

export default Source;
