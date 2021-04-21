import { InputBase, makeStyles, Paper } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";

interface SearchInputProps {
  query: string;
  setQuery: (val: string) => void;
}

const useSearchInputStyles = makeStyles({
  paperRoot: {
    padding: "2px 4px",
    display: "flex",
    alignItems: "center",
    width: 400,
    margin: "8px 0",
  },
  input: {
    flex: 1,
    padding: `4px 8px`,
  },
});

export default function SearchInput({ query, setQuery }: SearchInputProps) {
  const classes = useSearchInputStyles();
  return (
    <Paper className={classes.paperRoot}>
      <InputBase
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className={classes.input}
        placeholder="Search For contacts"
        inputProps={{ "aria-label": "search address book" }}
      />
      <SearchIcon color="primary" />
    </Paper>
  );
}
