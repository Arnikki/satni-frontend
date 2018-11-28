import React from 'react';
import { css } from 'react-emotion';
import { Trans } from '@lingui/macro';

const Source = ({source}) => {
  return (
    <div className={css({
      textAlign: 'right',
      marginTop: '1%',
      paddingBottom: '0',
      fontSize: '90%'
    })}>
      <Trans>Source: {source}</Trans>
    </div>
  );
};

export default Source;
