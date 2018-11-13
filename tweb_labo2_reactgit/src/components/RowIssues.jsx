import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import CommentsForm from './CommentsForm';
import IssueAvatar from './IssueAvatar';


const styles = {
  root: {
    //display: 'flex',
    //flex: 'row',
    //borderColor: '#d6d7da',
    },
  };


function RowIssues(props) {
  const { classes, status, header, info, commentNumbers, onClick} = props;
  
  return(
    <TableRow className={classes.root} onClick={onClick}>
      <TableCell padding={'dense'}>
        <IssueAvatar value={status} />
      </TableCell>
      <TableCell>
        <Typography variant= {'h6'} padding={'dense'}>
          {header}
        </Typography>
        <Typography variant= 'caption' >
          {info}
        </Typography>
      </TableCell>
      <TableCell padding={'dense'}>
        <CommentsForm commentNumbers={commentNumbers}></CommentsForm>
      </TableCell>
    </TableRow>
  );
}

export default withStyles(styles)(RowIssues);


