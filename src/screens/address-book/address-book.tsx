import { Grid } from "@material-ui/core";
import useAddressBook from "./address-book-hook";
import ContactTable from "./components/contact-table";
import SearchInput from "./components/search-input";
import { AddressBookContext } from "./address-book-context";
import ContactModal from "./components/contact-modal";
import AppTour from "tour/app-tour";

export default function AddressBookScreen() {
  const contextData = useAddressBook();

  return (
    <AddressBookContext.Provider value={contextData}>
      <Grid container>
        <Grid xs={12} item>
          <SearchInput />
        </Grid>
        <Grid xs={12} item>
          <ContactTable />
        </Grid>
      </Grid>
      <ContactModal />
      <AppTour />
    </AddressBookContext.Provider>
  );
}
