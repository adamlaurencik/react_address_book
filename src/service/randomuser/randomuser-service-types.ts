import Nationality from "model/nationality";
import User from "model/user";

export interface RandomUserServiceResponse {
  results?: User[];
  info?: {
    results?: number;
    page?: number;
  };
  error?: string;
}

export interface LoadUsersSettings {
  batchSize?: number;
  nationalityFilter?: Nationality;
  page?: number;
}
