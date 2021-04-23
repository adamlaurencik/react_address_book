import {
  Avatar,
  Dialog,
  DialogContent,
  DialogTitle,
  Grid,
  IconButton,
  TextField,
  Button,
  makeStyles,
} from "@material-ui/core";
import React, { useContext } from "react";
import { AddressBookContext } from "../address-book-context";
import Slide from "@material-ui/core/Slide";
import { TransitionProps } from "@material-ui/core/transitions";
import ContactMap from "./contact-map";
import CloseIcon from "@material-ui/icons/Close";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children?: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useContactModalStyles = makeStyles({
  closeIcon: { position: "absolute", right: "8px", top: "8px" },
  avatar: { width: "150px", height: "150px", margin: "auto" },
  mapWrapper: { margin: "16px -24px -8px" },
  buttonWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default function ContactModal() {
  const { selectedUser, setSelectedUser } = useContext(AddressBookContext);
  const classes = useContactModalStyles();
  return (
    <Dialog
      open={!!selectedUser}
      onClose={() => setSelectedUser(undefined)}
      maxWidth="md"
      fullWidth={true}
      TransitionComponent={Transition}
    >
      <DialogTitle id="alert-dialog-slide-title">
        {selectedUser?.name?.first} {selectedUser?.name?.last}
        <IconButton
          size="small"
          onClick={() => setSelectedUser(undefined)}
          className={classes.closeIcon}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={4}>
          <Grid item xs={12} md={3}>
            <Avatar
              src={selectedUser?.picture?.large}
              className={classes.avatar}
            />
          </Grid>
          <Grid item sm={12} md={9}>
            <Grid container spacing={2} alignItems="center" justify="center">
              <Grid item xs={6}>
                <ModalTextField
                  label="First name"
                  value={selectedUser?.name?.first}
                />
              </Grid>
              <Grid item xs={6}>
                <ModalTextField
                  label="Last name"
                  value={selectedUser?.name?.last}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ModalTextField label="Email" value={selectedUser?.email} />
              </Grid>
              <Grid item xs={12} sm={6}>
                <ModalTextField label="Phone" value={selectedUser?.phone} />
              </Grid>
              <Grid item xs={12}>
                <ModalTextField
                  label="Address"
                  value={` ${selectedUser?.location?.street?.number}  ${selectedUser?.location?.street?.name} ${selectedUser?.location?.city}, ${selectedUser?.location?.postcode}`}
                />
              </Grid>
              <Grid item xs={12}>
                <Grid container>
                  <Grid item xs={6} className={classes.buttonWrapper}>
                    <Button
                      startIcon={<PhoneIcon />}
                      variant="contained"
                      color="primary"
                      target="_blank"
                      href={`tel:${selectedUser?.phone}`}
                    >
                      Call
                    </Button>
                  </Grid>
                  <Grid item xs={6} className={classes.buttonWrapper}>
                    <Button
                      startIcon={<EmailIcon />}
                      color="primary"
                      variant="contained"
                      target="_blank"
                      href={`mailto:${selectedUser?.email}`}
                    >
                      Mail
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <div className={classes.mapWrapper}>
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
      label={label}
      value={value}
      fullWidth
      variant="outlined"
      size="small"
    />
  );
}
