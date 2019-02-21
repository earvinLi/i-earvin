// External Dependencies
import React from 'react';

// Material-UI Dependencies
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { withStyles } from '@material-ui/core/styles';

// Local Variables
const styles = {
  grow: {
    flexGrow: 1,
  },
  root: {
    flexGrow: 1,
  },
};

// Component Definition
function TopNavigation(props) {
  const { classes } = props;

  const labelSection = [
    { name: 'Earvin' },
    { name: 'Who\'s your neighbor?' },
    { name: 't9n' },
    { name: 'React' },
    { name: 'Gadgets' },
  ].map(label => <Button color="inherit">{label.name}</Button>);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            color="inherit"
            variant="h6"
          >
            i-earvin
          </Typography>
          <div className={classes.grow}/>
          {labelSection}
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withStyles(styles)(TopNavigation);
