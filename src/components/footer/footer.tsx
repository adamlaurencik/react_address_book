import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Container from "@material-ui/core/Container";
import HeartIcon from "@material-ui/icons/Favorite";
import Toolbar from "@material-ui/core/Toolbar";

import useFooterStyles from "./footer-styles";

export default function Footer() {
  const classes = useFooterStyles();
  return (
    <AppBar position="static" color="primary" component="footer">
      <Container maxWidth="md">
        <Toolbar className={classes.root}>
          <Typography variant="body1" color="inherit">
            Made with
            <HeartIcon
              className={classes.heartIcon}
              color="error"
              fontSize="small"
            />
            by Adam Laurencik
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
