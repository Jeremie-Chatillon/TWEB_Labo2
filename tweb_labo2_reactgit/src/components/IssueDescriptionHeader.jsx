import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import TableIssues from './TableIssues';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  }
});


const issueHeader = 'hello, this is an issue header';
const issueContent = 'hello, this is an issue body. you can display what you want inside';

function IssueDescriptionHeader(props) {
  const { classes, text } = props;

  return (
    <div className={classes.root}>
      <Typography variant={'h5'}>
        {text}
      </Typography>
    </div>
  );
}

IssueDescriptionHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IssueDescriptionHeader);