import { useMemo, useState } from "react";
import useEventCallback from "use-event-callback";

import User from "model/user";
import { loadUsers } from "service/randomuser/randomuser-service";

const BATCH_SIZE = 50;
const MAX_RESULTS = 1000;

export default function useAddressBook() {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUser, setSelectedUser] = useState<User>();
  const [filterQuery, setFilterQuery] = useState("");
  const filterActive = filterQuery.length > 0;
  const hasNextPage = !filterActive && users.length < MAX_RESULTS;

  const handleLoadUsers = useEventCallback(async (startIndex: number) => {
    const page = Math.floor(startIndex / BATCH_SIZE);
    if (page * BATCH_SIZE >= MAX_RESULTS) {
      return;
    }
    try {
      const usersResponse = await loadUsers({
        page,
      });
      const loadedUsers = usersResponse?.results ?? [];
      setUsers((current) => [...current, ...loadedUsers]);
    } catch (e) {
      //TODO ERROR HANDLING
    }
  });

  const filteredUsers = useMemo(() => {
    if (filterActive) {
      return users.filter((u) =>
        `${u.name.first} ${u.name.last}`
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
      hasNextPage,
      selectedUser,
      setSelectedUser,
    }),
    [
      filteredUsers,
      filterQuery,
      setFilterQuery,
      handleLoadUsers,
      hasNextPage,
      selectedUser,
      setSelectedUser,
    ]
  );
}
