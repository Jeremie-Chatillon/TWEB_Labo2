import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import IssueDescriptionHeader from './IssueDescriptionHeader';

const styles = theme => ({
  root: {
    width: 900,
    maxWidth: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
  },
  table: {
    minWidth: 700,
  },
});

function IssueDescritpionPaper(props) {
  const { classes, header, text } = props;

  return (
    <Paper className={classes.root}>
      <IssueDescriptionHeader text={header}/>
      <br/>
      {text}
    </Paper>
  );
}

IssueDescritpionPaper.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IssueDescritpionPaper);