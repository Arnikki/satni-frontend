import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { Trans } from '@lingui/macro';
import Typography from '@material-ui/core/Typography';
import BottomNavigation from '@material-ui/core/BottomNavigation';

const styles = {
  root: {
  }
};

const BottomBar = ({ classes }) => (
  <footer className={classes.footer}>
    <BottomNavigation position='static' color='default'>
      <Typography variant='body2' align='center'>
        <Trans>
        Sámi dictionaries and terms delivered by<br />
          <a href='http://divvun.no'>
        Divvun</a>, <a href='http://giella.org'>
        Giellagáldu</a> and <a href='http://giellatekno.uit.no'>Giellatekno</a>
        </Trans>
      </Typography>
    </BottomNavigation>
  </footer>
);

BottomBar.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(BottomBar);
