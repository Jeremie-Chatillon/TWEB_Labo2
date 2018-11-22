import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  button: {
    margin: theme.spacing.unit,
    size: 'auto',
  },
});

class TextFieldCustom extends React.Component {
  state = {
    text: "",
  };

  handleChange = () => event => {
      console.log(this.props);
      this.props.onChanges(event.target.value);
      console.log(this.props);
  };

  render() {
    const { classes, title} = this.props;

    return (
      <div className={classes.container} noValidate autoComplete="off">
        <TextField
          id={title + "outlined-name"}
          label={title}
          className={classes.textField}
          value={this.state.title}
          onChange={this.handleChange()}
          
          margin="normal"
          variant="outlined"
        />
        
      </div>
    );
  }
}

TextFieldCustom.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TextFieldCustom);
