import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Searcher from '../components/Searcher';
import Articles from '../components/Articles';
import AppBar from '../components/AppBar';
import BottomBar from '../components/BottomBar';
import InflectionContainer from './InflectionContainer';
import { createMuiTheme, MuiThemeProvider, withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme();

const styles = theme => ({
  paper: {
    padding: 5,
    margin: 5,
    width: '100%',
    height: 'calc(100% - 10px)'
  },
  '@global': {
    'html, body, #root': {
      height: '100%'
    }
  },
  container: {
    height: 'calc(100% - 64px - 56px)'
  }
});

const AsyncApp = ({classes, match}) => (
  <MuiThemeProvider theme={theme}>
    <CssBaseline />
    <AppBar />
    <Grid container className={classes.container}>
      <Grid item xs>
        {match.params.lemma ?
          <Articles lemma={match.params.lemma} /> :
        null
        }
      </Grid>
      <Grid item xs>
        <div>Inflections</div>
        <InflectionContainer lemma={match.params.lemma} />
      </Grid>
    </Grid>
    <BottomBar />
  </MuiThemeProvider>
);

export default withStyles(styles)(AsyncApp);
