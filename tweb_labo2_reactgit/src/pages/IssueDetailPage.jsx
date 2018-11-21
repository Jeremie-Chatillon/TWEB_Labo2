import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import IssueDescritpionPaper from '../components/IssueDescritpionPaper';

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
});

class SimpleSelect extends React.Component {
  render() {
    const {classes} = this.props;
    const { header, text } = this.props.location.state;
    

    return (
      <div className={classes.root}>
        <IssueDescritpionPaper header={header} text={text} />
      </div>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSelect);
