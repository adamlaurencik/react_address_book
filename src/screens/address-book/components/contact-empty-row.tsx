import useAddressBookStyles from "../address-book-styles";
import {
  Box,
  Button,
  TableCell,
  TableRow,
  Typography,
} from "@material-ui/core";
import { useContext } from "react";
import { AddressBookContext } from "../address-book-context";
import useEventCallback from "use-event-callback";
export default function ContactEmptyRow() {
  const { filterQuery, setFilterQuery } = useContext(AddressBookContext);
  const classes = useAddressBookStyles();

  const clearFilter = useEventCallback(() => {
    setFilterQuery("");
  });

  return (
    <TableRow
      component="div"
      className={classes.tableRow}
      data-testid="contact-empty-row"
    >
      <TableCell component="div" className={classes.tableCell}>
        <Box
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          padding={1}
        >
          <Typography gutterBottom={true}>No results found</Typography>
          {filterQuery && (
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={clearFilter}
            >
              Clear filter
            </Button>
          )}
        </Box>
      </TableCell>
    </TableRow>
  );
}
