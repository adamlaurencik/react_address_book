import { InputBase, makeStyles, Paper, Tooltip } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import { useContext } from "react";
import ReactCountryFlag from "react-country-flag";
import { AddressBookContext } from "../address-book-context";

const useSearchInputStyles = makeStyles({
  paperRoot: {
    padding: "2px 8px",
    display: "flex",
    alignItems: "center",

    margin: "16px 5%",
  },
  input: {
    flex: 1,
    padding: `4px 8px`,
  },
});

export default function SearchInput() {
  const classes = useSearchInputStyles();
  const { filterQuery, setFilterQuery, nationality } = useContext(
    AddressBookContext
  );
  return (
    <Paper className={classes.paperRoot} id="search-filter">
      <Tooltip title="Filter for the nationality, change it in the settings">
        <div>
          <ReactCountryFlag svg={true} countryCode={nationality} />
        </div>
      </Tooltip>
      <InputBase
        value={filterQuery}
        onChange={(e) => setFilterQuery(e.target.value)}
        className={classes.input}
        placeholder="Search for contacts"
        inputProps={{ "aria-label": "search address book" }}
      />
      <SearchIcon color="primary" />
    </Paper>
  );
}
