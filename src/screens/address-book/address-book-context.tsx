import { createContext } from "react";
import useAddressBook from "./address-book-hook";

type AddressBookContextType = ReturnType<typeof useAddressBook>;

export const AddressBookContext = createContext<AddressBookContextType>(
  undefined as any
);
