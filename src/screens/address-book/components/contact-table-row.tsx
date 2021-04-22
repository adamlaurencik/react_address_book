import {
  Avatar,
  Box,
  Grid,
  Button,
  TableCell,
  TableRow,
} from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import User from "model/user";
import { AddressBookContext } from "../address-book-context";
import { useContext } from "react";
import useAddressBookStyles from "../address-book-styles";

interface ContactTableRowProps {
  user?: User;
}

export default function ContactTableRow({ user }: ContactTableRowProps) {
  const { screenVersion } = useContext(AddressBookContext);

  if (screenVersion === "lg") {
    return <DesktopContactTableRow user={user} />;
  }

  return <MobileContactTableRow user={user} />;
}

function DesktopContactTableRow({ user }: ContactTableRowProps) {
  const classes = useAddressBookStyles();
  const { setSelectedUser } = useContext(AddressBookContext);
  return (
    <TableRow component="div" className={classes.tableRow}>
      <TableCell component="div" className={classes.tableCell}>
        {user ? (
          <Avatar src={user.picture.thumbnail} />
        ) : (
          <Skeleton variant="circle" width="40px" height="40px" />
        )}
        <Box marginLeft="10px">
          <div>{user ? user.name.first : <Skeleton width="80px" />}</div>
          <div>
            {user ? <b>{user.name.last}</b> : <Skeleton width="120px" />}
          </div>
        </Box>
      </TableCell>
      <TableCell
        component="div"
        className={classes.tableCell}
        style={{ flex: 2 }}
      >
        {user ? user.email : <Skeleton width="150px" />}
      </TableCell>
      <TableCell component="div" className={classes.tableCell}>
        {user ? user.phone : <Skeleton width="80px" />}
      </TableCell>
      <TableCell component="div" className={classes.tableCell}>
        <Button
          onClick={() => setSelectedUser(user)}
          disabled={!user}
          variant="contained"
          color="primary"
        >
          Detail
        </Button>
      </TableCell>
    </TableRow>
  );
}

function MobileContactTableRow({ user }: ContactTableRowProps) {
  const classes = useAddressBookStyles();
  const { setSelectedUser } = useContext(AddressBookContext);
  return (
    <TableRow component="div" className={classes.tableRow}>
      <TableCell component="div" className={classes.tableCell}>
        {user ? (
          <Avatar src={user.picture.thumbnail} />
        ) : (
          <Skeleton variant="circle" width="40px" height="40px" />
        )}
        <Box marginLeft="10px" flex={1}>
          {user ? (
            <div>
              {user.name.first} <b>{user.name.last}</b>
            </div>
          ) : (
            <Skeleton width="120px" />
          )}
          <div> {user ? user.email : <Skeleton width="150px" />}</div>
          <div>{user ? user.phone : <Skeleton width="80px" />}</div>
        </Box>
        <Box
          marginLeft="10px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Button
            onClick={() => setSelectedUser(user)}
            disabled={!user}
            variant="contained"
            size="small"
            color="primary"
          >
            Detail
          </Button>
        </Box>
      </TableCell>
    </TableRow>
  );
}
