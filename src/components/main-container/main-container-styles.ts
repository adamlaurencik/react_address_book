import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useMainContainerStyles = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      // Full screen without Navbar + Footer
      minHeight: "calc(100vh - 48px - 64px)",
    },
  })
);

export default useMainContainerStyles;
