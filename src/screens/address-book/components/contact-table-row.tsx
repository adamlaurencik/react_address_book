import { Avatar, TableCell, TableRow } from "@material-ui/core";
import Skeleton from "@material-ui/lab/Skeleton";
import User from "model/user";
import useAddressBookStyles from "../address-book-styles";
import useWindowSize from "hooks/screen-size-hook";

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
      </TableCell>
      <TableCell component="div" className={classes.tableCell}>
        <Skeleton width="150px" />
      </TableCell>
      <TableCell component="div" className={classes.tableCell}>
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
  return (
    <TableRow component="div" className={classes.tableRow}>
      <TableCell component="div" className={classes.tableCell}>
        <Avatar src={user.picture.thumbnail} />
      </TableCell>
      <TableCell component="div" className={classes.tableCell}>
        {user.name.last}
      </TableCell>
      <TableCell component="div" className={classes.tableCell}>
        {user.name.first}
      </TableCell>
      <TableCell component="div" className={classes.tableCell}>
        {user.email}
      </TableCell>
      <TableCell component="div" className={classes.tableCell}>
        {user.phone}
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
