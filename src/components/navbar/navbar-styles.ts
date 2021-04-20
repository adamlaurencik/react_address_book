import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useNavbarStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
  })
);

export default useNavbarStyles;
