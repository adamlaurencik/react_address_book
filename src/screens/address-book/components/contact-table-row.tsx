import { Avatar, Box, Button, TableCell, TableRow } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import User from "model/user";
import useAddressBookStyles from "../address-book-styles";
import useWindowSize from "hooks/screen-size-hook";
import { AddressBookContext } from "../address-book-context";
import { useContext } from "react";

interface ContactTableRowProps {
  user?: User;
}

const MOBILE_TABLE_WIDTH_BREAKPOINT = 750;

export default function ContactTableRow({ user }: ContactTableRowProps) {
  const { width } = useWindowSize();
  if (!user) {
    return <SkeletonTableRow />;
  }
  if (width <= MOBILE_TABLE_WIDTH_BREAKPOINT) {
    return <MobileContactTableRow user={user} />;
  }
  return <DesktopContactTableRow user={user} />;
}

function SkeletonTableRow() {
  const classes = useAddressBookStyles();
  return (
    <TableRow component="div" className={classes.tableRow}>
      <TableCell component="div" className={classes.tableCell}>
        <Skeleton variant="circle" width="40px" height="40px" />
        <Skeleton width="150px" />
      </TableCell>
      <TableCell component="div" className={classes.tableCell}>
        <Skeleton width="150px" />
      </TableCell>
      <TableCell component="div" className={classes.tableCell}>
        <Skeleton width="200px" />
      </TableCell>
    </TableRow>
  );
}

function DesktopContactTableRow({ user }: Required<ContactTableRowProps>) {
  const classes = useAddressBookStyles();
  const { setSelectedUser } = useContext(AddressBookContext);
  return (
    <TableRow component="div" className={classes.tableRow}>
      <TableCell component="div" className={classes.tableCell}>
        <Avatar src={user.picture.thumbnail} />
        <Box marginLeft="10px">
          <div>
            <b>{user.name.first}</b>
          </div>
          <div>{user.name.last}</div>
        </Box>
      </TableCell>
      <TableCell component="div" className={classes.tableCell}>
        {user.email}
      </TableCell>
      <TableCell component="div" className={classes.tableCell}>
        {user.phone}
      </TableCell>
      <TableCell component="div" className={classes.tableCell}>
        <Button
          onClick={() => setSelectedUser(user)}
          variant="contained"
          color="primary"
        >
          Detail
        </Button>
      </TableCell>
    </TableRow>
  );
}

function MobileContactTableRow({ user }: Required<ContactTableRowProps>) {
  const classes = useAddressBookStyles();
  return (
    <TableRow component="div" className={classes.tableRow}>
      <TableCell component="div" className={classes.tableCell}>
        <Avatar src={user.picture.thumbnail} />
        {user.name.last} {user.name.first}
      </TableCell>
    </TableRow>
  );
}
