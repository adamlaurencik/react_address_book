import { useMemo, useState } from "react";
import useEventCallback from "use-event-callback";

import User from "model/user";
import { loadUsers } from "service/randomuser/randomuser-service";
import useLocalStorage from "hooks/local-storage-hook";
import Nationality from "model/nationality";
import useWindowSize from "hooks/screen-size-hook";
import { MOBILE_WIDTH_BREAKPOINT } from "./address-book-styles";
import { useSnackbar } from "notistack";

const BATCH_SIZE = 50;

type SreenVersion = "sm" | "lg";

export default function useAddressBook() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User>();
  const [filterQuery, setFilterQuery] = useState("");
  const [nationality] = useLocalStorage("nationality", Nationality.CH);
  const [hasNextPage, setHasNextPage] = useState(true);
  const { enqueueSnackbar } = useSnackbar();
  const { width } = useWindowSize();
  let screenVersion: SreenVersion = "lg";
  if (width < MOBILE_WIDTH_BREAKPOINT) {
    screenVersion = "sm";
  }

  const filterActive = filterQuery.length > 0;

  const handleLoadUsers = useEventCallback(
    async (startIndex: number, endIndex?: number, attempt = 1) => {
      const page = Math.floor(startIndex / BATCH_SIZE);
      try {
        const usersResponse = await loadUsers({
          nationalityFilter: nationality,
          page,
        });
        const loadedUsers = usersResponse?.results ?? [];
        setUsers((current) => [...current, ...loadedUsers]);
        if (loadedUsers.length === 0) {
          setHasNextPage(false);
        }
      } catch (e) {
        enqueueSnackbar(
          `Error loading users, retry in 10 seconds ( attempt ${attempt} )`,
          {
            variant: "error",
          }
        );
        setTimeout(
          () => handleLoadUsers(startIndex, endIndex, attempt + 1),
          10000
        );
      }
    }
  );

  const filteredUsers = useMemo(() => {
    if (filterActive) {
      return users.filter((u) =>
        `${u.name?.first} ${u.name?.last}`
          .toLowerCase()
          .startsWith(filterQuery.toLowerCase())
      );
    } else {
      return users;
    }
  }, [users, filterQuery, filterActive]);

  return useMemo(
    () => ({
      users: filteredUsers,
      filterQuery,
      setFilterQuery,
      handleLoadUsers,
      hasNextPage: !filterActive && hasNextPage,
      selectedUser,
      setSelectedUser,
      screenVersion,
      nationality,
    }),
    [
      filteredUsers,
      filterQuery,
      setFilterQuery,
      handleLoadUsers,
      hasNextPage,
      selectedUser,
      filterActive,
      setSelectedUser,
      screenVersion,
      nationality,
    ]
  );
}
