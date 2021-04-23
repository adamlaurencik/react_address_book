import axios from "axios";
import {
  RandomUserServiceResponse,
  LoadUsersSettings,
} from "./randomuser-service-types";

const MAX_RESULTS = 1000;

export async function loadUsers({
  batchSize = 50,
  nationalityFilter,
  page = 1,
}: LoadUsersSettings | undefined = {}): Promise<RandomUserServiceResponse> {
  //Simulate end of contact list
  if (batchSize * page >= MAX_RESULTS) {
    return { results: [] };
  }

  const response = await axios.get<RandomUserServiceResponse>(
    `${process.env.REACT_APP_RANDOM_USER_API_BASE}/api`,
    {
      params: {
        page: page,
        results: batchSize,
        nat: nationalityFilter,
      },
    }
  );
  const data = response.data;
  if (data.error) {
    throw new Error(data.error);
  }

  return data;
}
