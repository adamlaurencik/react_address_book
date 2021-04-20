import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import useNavbarStyles from "./navbar-styles";

export default function Navbar() {
  const classes = useNavbarStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Address Book App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
