import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';


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
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;
function createData(status, header, info, commentNumbers) {
  id += 1;
  return { id, status, header, info, commentNumbers};
}


const rows = [
  createData('OPEN', 'Test1' , 'Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1Ceci est l\'info de test 1', 3),
  createData('CLOSED', 'Test2' , 'Ceci est l\'info de test 2', 31),
  createData('OPEN', 'Test3' , 'Ceci est l\'info de test 3', 32),
  createData('CLOSED', 'Test4' , 'Ceci est l\'info de test 4', 0),
  createData(1, 'Test5' , 'Ceci est l\'info de test 5', 21),
];
function SimpleTable(props) {
  const { classes } = props;

  return (
    <Paper className={classes.root}>
      <TableIssues rows={rows}>
      </TableIssues>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);