import { useState } from "react";
import useEventCallback from "use-event-callback";

import User from "model/user";
import { loadUsers } from "service/randomuser/randomuser-service";

const BATCH_SIZE = 50;
const MAX_RESULTS = 1000;

export default function useAddressBook() {
  const [users, setUsers] = useState<User[]>([]);

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

  const hasNextPage = users.length < MAX_RESULTS;
  return {
    users,
    handleLoadUsers,
    hasNextPage,
  };
}
