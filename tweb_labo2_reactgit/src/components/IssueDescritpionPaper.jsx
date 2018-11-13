import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import IssueDescriptionHeader from './IssueDescriptionHeader';

import TableIssues from './TableIssues';

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

const issueHeader = 'hello, this is an issue header';
const issueContent = 'hello, this is an issue body. you can display what you want inside';

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