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
    flex: 1,
    minWidth: 0,
    },
    status: {
      
      //borderColor: '#d6d7da',
      //width: '20%',
      },
      data: {
        withSpace: 'nowrap',
        
        overflow: 'hidden',
        textOverflow: "ellipsis",
       
        //borderColor: '#d6d7da',
        //width: '65%',
      },
      comments: {
        //borderColor: '#d6d7da',
        //width: '15%',
      },
  };


function RowIssues(props) {
  const { classes, status, header, info, commentNumbers, onClick} = props;
  
  return(
    <TableRow className={classes.root} onClick={onClick}>
      <TableCell padding={'dense'} className={classes.status}>
        <IssueAvatar value={status} />
      </TableCell>
      <TableCell >
        <div className={classes.data}>
          <Typography variant={'h6'} padding={'dense'} >
            {header}
          </Typography>
          <Typography variant= 'caption' noWrap={true}>
            {info}
          </Typography>
        </div>
      </TableCell>
      <TableCell padding={'dense'} className={classes.comment}>
        <CommentsForm commentNumbers={commentNumbers}></CommentsForm>
      </TableCell>
    </TableRow>
  );
}

export default withStyles(styles)(RowIssues);


