import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useFooterStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      justifyContent: "center",
    },
    heartIcon: {
      fontSize: 18,
      margin: "0 2px",

      //Optically align with text
      transform: "translateY(2px)",
    },
  })
);

export default useFooterStyles;
