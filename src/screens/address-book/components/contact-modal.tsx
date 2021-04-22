import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
} from "@material-ui/core";
import React, { useContext } from "react";
import { AddressBookContext } from "../address-book-context";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import ContactMap from "./contact-map";
import CloseIcon from "@material-ui/icons/Close";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ContactModal() {
  const { selectedUser, setSelectedUser } = useContext(AddressBookContext);
  return (
    <Dialog
      open={!!selectedUser}
      onClose={() => setSelectedUser(undefined)}
      maxWidth="md"
      fullWidth={true}
      TransitionComponent={Transition}
    >
      <DialogTitle id="alert-dialog-slide-title">
        {selectedUser?.name.first} {selectedUser?.name.last}
        <IconButton
          size="small"
          onClick={() => setSelectedUser(undefined)}
          style={{ position: "absolute", right: "8px", top: "8px" }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={4}>
          <Grid item xs={3}>
            <Avatar
              src={selectedUser?.picture.large}
              style={{ width: "150px", height: "150px" }}
            />
          </Grid>
          <Grid item xs={9}>
            <Grid container spacing={2} alignItems="center" justify="center">
              <Grid item xs={6}>
                <ModalTextField
                  label="First name"
                  value={selectedUser?.name.first}
                />
              </Grid>
              <Grid item xs={6}>
                <ModalTextField
                  label="Last name"
                  value={selectedUser?.name.last}
                />
              </Grid>
              <Grid item xs={6}>
                <ModalTextField label="Email" value={selectedUser?.email} />
              </Grid>
              <Grid item xs={6}>
                <ModalTextField
                  label="Phone number"
                  value={selectedUser?.phone}
                />
              </Grid>
              <Grid item xs={12}>
                <ModalTextField
                  label="Address"
                  value={` ${selectedUser?.location?.street?.number}  ${selectedUser?.location?.street?.name} ${selectedUser?.location?.city}, ${selectedUser?.location?.postcode}`}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div style={{ margin: "16px -24px -8px" }}>
          {selectedUser && <ContactMap user={selectedUser} />}
        </div>
      </DialogContent>
    </Dialog>
  );
}

function ModalTextField({
  label,
  value,
}: {
  label: string;
  value?: string | number;
}) {
  return (
    <TextField
      label="Phone number"
      value={value}
      fullWidth
      variant="outlined"
      size="small"
    />
  );
}
