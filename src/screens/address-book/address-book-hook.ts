import { useState } from "react";
import useEventCallback from "use-event-callback";

import User from "model/user";
import { loadUsers } from "service/randomuser/randomuser-service";

export default function useAddressBook() {
  const [users, setUsers] = useState<User[]>([]);

  const handleLoadUsers = useEventCallback(async () => {
    try {
      const usersResponse = await loadUsers();
      const loadedUsers = usersResponse?.results ?? [];
      setUsers((current) => [...current, ...loadedUsers]);
    } catch (e) {
      //TODO ERROR HANDLING
    }
  });

  return {
    users,
    handleLoadUsers,
  };
}
