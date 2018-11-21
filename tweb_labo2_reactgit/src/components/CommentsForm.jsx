import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import CommentIcon from '@material-ui/icons/Comment';

const styles = {
  root: {
    display: 'flex',
    borderWidth: 0.5,
    borderColor: '#d6d7da',
    },
  };


function CommentsForm(props) {
  const {classes, commentNumbers} = props;
  
  return(
    <div className={classes.root}>
      <CommentIcon />
      <Typography>{commentNumbers}</Typography>
    </div>
  );
}

export default withStyles(styles)(CommentsForm);


