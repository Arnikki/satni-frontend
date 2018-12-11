import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Trans } from '@lingui/macro';

const Source = ({source}) => {
  return (
    <Typography align='center' variant='body2'>
      <Trans>Source: {source}</Trans>
    </Typography>
  );
};

export default Source;
