import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useAddressBookStyles = makeStyles((theme: Theme) =>
  createStyles({
    tableRoot: {
      width: "100%",
    },
    tableBody: {
      width: "100%",
    },
    tableRow: {
      display: "flex!important",
      flexDirection: "row",
      flexWrap: "nowrap",
      alignItems: "stretch",
      boxSizing: "border-box",
      minWidth: "100%",
      width: "100%",
    },
    tableCell: {
      display: "flex!important",
      alignItems: "center",
      flex: 1,
    },
  })
);

export const MOBILE_WIDTH_BREAKPOINT = 800;

export default useAddressBookStyles;
