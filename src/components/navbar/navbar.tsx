import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MuiLink from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import SettingsIcon from "@material-ui/icons/Settings";

import { Link } from "react-router-dom";

import useNavbarStyles from "./navbar-styles";

export default function Navbar() {
  const classes = useNavbarStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Box flex={1}>
            <MuiLink component={Link} to="/" color="inherit" underline="none">
              <Typography variant="h6">Address Book App</Typography>
            </MuiLink>
          </Box>
          <Button
            color="inherit"
            component={Link}
            to="/settings"
            startIcon={<SettingsIcon />}
          >
            Settings
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
