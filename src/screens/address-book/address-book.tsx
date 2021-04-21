import useAddressBook from "./address-book-hook";
import ContactTable from "./components/contact-table";
import SearchInput from "./components/search-input";

export default function AddressBookScreen() {
  const {
    handleLoadUsers,
    users,
    hasNextPage,
    filterQuery,
    setFilterQuery,
  } = useAddressBook();

  return (
    <>
      <SearchInput query={filterQuery} setQuery={setFilterQuery} />
      <ContactTable
        handleLoadUsers={handleLoadUsers}
        users={users}
        hasNextPage={hasNextPage}
      />
    </>
  );
}
