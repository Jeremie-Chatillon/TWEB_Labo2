import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  }
});

class SimpleSelect extends React.Component {
  state = {
    text: this.props.values[0].text,
    value: this.props.values[0].value,
    labelWidth: 0
  };

  componentDidMount() {}

  handleChange = event => {
    this.setState(
      { text: event.target.text,
        value: event.target.value,
    });
  };

  render() {
    const { classes, title, values } = this.props;

    return (
      <form className={classes.root} autoComplete="off">
        <FormControl className={classes.formControl}>
          <InputLabel shrink htmlFor="age-label-placeholder">
            {title}
          </InputLabel>
          <Select
            value={this.state.value}
            onChange={this.handleChange}
            input={<Input name={title} id={title + '-Select-List'}/>}
            displayEmpty
            name={title}
            className={classes.selectEmpty}
          >
            {values.map((data) => 
              <MenuItem key={data.id} value={data.value}>{data.text}</MenuItem>
            )}

          </Select>
          
        </FormControl>
      </form>
    );
  }
}

SimpleSelect.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SimpleSelect);
