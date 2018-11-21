import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  }
});


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