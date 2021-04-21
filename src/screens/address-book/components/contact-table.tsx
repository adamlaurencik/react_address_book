import User from "model/user";
import InfiniteScroll from "components/infinite-scroll/infinite-scroll";
import useAddressBookStyles from "../address-book-styles";
import Paper from "@material-ui/core/Paper";
import {
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import ContactTableRow from "./contact-table-row";
import { useContext } from "react";
import { AddressBookContext } from "../address-book-context";

export default function ContactTable() {
  const { handleLoadUsers, hasNextPage, users } = useContext(
    AddressBookContext
  );
  const classes = useAddressBookStyles();
  return (
    <Paper className={classes.tableRoot}>
      <Table stickyHeader component="div" size="small">
        <TableHead component="div">
          <TableRow component="div" className={classes.tableRow}>
            <TableCell component="div" className={classes.tableCell}>
              Contact
            </TableCell>
            <TableCell component="div" className={classes.tableCell}>
              Email
            </TableCell>
            <TableCell component="div" className={classes.tableCell}>
              Phone
            </TableCell>
            <TableCell component="div" className={classes.tableCell}>
              Detail
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody component="div" className={classes.tableBody}>
          <InfiniteScroll
            hasNextPage={hasNextPage}
            items={users}
            loadNextPage={handleLoadUsers}
            renderItem={(user) => <ContactTableRow user={user} />}
            itemHeight={53}
            scrollHeight={600}
          />
        </TableBody>
      </Table>
    </Paper>
  );
}
