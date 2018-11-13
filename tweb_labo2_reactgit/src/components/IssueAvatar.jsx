import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import deepOrange from '@material-ui/core/colors/deepOrange';
import deepPurple from '@material-ui/core/colors/deepPurple';

const styles = {
  avatar: {
    margin: 10,
  },
  greenAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: green[500],
  },
  redeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepOrange[500],
  },
  orangeAvatar: {
    margin: 10,
    color: '#fff',
    backgroundColor: deepPurple[500],
  },
  row: {
    display: 'flex',
    justifyContent: 'center',
  },
};

function avatars(value, classes) {
  switch(value){
    case 'OPEN':
      return (<Avatar className={classes.greenAvatar}>O</Avatar>);
    case 'CLOSE':
      return (<Avatar className={classes.redeAvatar}>C</Avatar>);
    default:
      return (<Avatar className={classes.orangeAvatar}>?</Avatar>);
  }
}

function IssueAvatar(props) {
  const { classes, value } = props;

  const avatar = avatars(value, classes);

  return (
    <div className={classes.row}>
      {avatar}
    </div>
  );
}

IssueAvatar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IssueAvatar);