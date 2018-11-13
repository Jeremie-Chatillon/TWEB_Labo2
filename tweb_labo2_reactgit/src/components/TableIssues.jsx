import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';


import RowIssues from './RowIssues';




const styles = {
  root: {
    //display: 'flex',
    //flex: 'row',
    //borderColor: '#d6d7da',
    },
  };


function TableIssues(props) {
  const { classes, rows } = props;
 
  return(
    <Table>
      {rows.map(row => {
        return (
          <RowIssues
          key={row.id}
          status = {row.status}
          header = {row.header}
          info = {row.info}
          commentNumbers = {row.commentNumbers}
          />
        );
      })}
    </Table>
  );
}

export default withStyles(styles)(TableIssues);


