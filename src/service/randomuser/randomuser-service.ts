import axios from "axios";
import { RandomUserServiceResponse } from "./randomuser-service-types";

export async function loadUsers() {
  const response = await axios.get<RandomUserServiceResponse>(
    `${process.env.REACT_APP_RANDOM_USER_API_BASE}/api`
  );
  const data = response.data;
  if (data.error) {
    //TODO THROW
  }
  return data;
}
