import { InputBase, makeStyles, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useContext } from "react";
import { AddressBookContext } from "../address-book-context";

const useSearchInputStyles = makeStyles({
  paperRoot: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 800,
    margin: "16px auto",
  },
  input: {
    flex: 1,
    padding: `4px 8px`,
  },
});

export default function SearchInput() {
  const classes = useSearchInputStyles();
  const { filterQuery, setFilterQuery } = useContext(AddressBookContext);
  return (
    <Paper className={classes.paperRoot}>
      <InputBase
        value={filterQuery}
        onChange={(e) => setFilterQuery(e.target.value)}
        className={classes.input}
        placeholder="Search For contacts"
        inputProps={{ "aria-label": "search address book" }}
      />
      <SearchIcon color="primary" />
    </Paper>
  );
}