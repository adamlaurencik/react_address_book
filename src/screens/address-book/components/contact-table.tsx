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

interface ContactTableProps {
  users: User[];
  handleLoadUsers: (startIndex: number) => Promise<void>;
  hasNextPage: boolean;
}

export default function ContactTable({
  handleLoadUsers,
  users,
  hasNextPage,
}: ContactTableProps) {
  const classes = useAddressBookStyles();
  return (
    <Paper className={classes.tableRoot}>
      <Table stickyHeader component="div" size="small">
        <TableHead component="div">
          <TableRow component="div" className={classes.tableRow}>
            <TableCell component="div" className={classes.tableCell}>
              Avatar
            </TableCell>
            <TableCell component="div" className={classes.tableCell}>
              Surname
            </TableCell>
            <TableCell component="div" className={classes.tableCell}>
              Name
            </TableCell>
            <TableCell component="div" className={classes.tableCell}>
              Email
            </TableCell>
            <TableCell component="div" className={classes.tableCell}>
              Phone
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
            scrollHeight={800}
          />
        </TableBody>
      </Table>
    </Paper>
  );
}
