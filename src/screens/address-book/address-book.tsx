import useAddressBook from "./address-book-hook";
import ContactTable from "./components/contact-table";

export default function AddressBookScreen() {
  const { handleLoadUsers, users, hasNextPage } = useAddressBook();

  return (
    <ContactTable
      handleLoadUsers={handleLoadUsers}
      users={users}
      hasNextPage={hasNextPage}
    />
  );
}
