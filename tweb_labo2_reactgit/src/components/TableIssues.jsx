import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';


import RowIssues from './RowIssues';


const styles = {
  root: {
    display: 'flex',
    flex: 'row',
    borderColor: '#d6d7da',
    },
  };


function TableIssues(props) {
  const { classes, rows } = props;
  return(
    <Table> 
      {rows.map(row => {
        return (
          //<Link to={{ pathname: '/issues', state: { header: row.header, text: row.text} }}>
            <RowIssues
            className={classes.root}
            key={row.id}
            status = {row.status}
            header = {row.header}
            info = {row.info}
            commentNumbers = {row.commentNumbers} 
            />
          //</Link>
        );
      })}
    </Table>
  );
}

export default withStyles(styles)(TableIssues);


