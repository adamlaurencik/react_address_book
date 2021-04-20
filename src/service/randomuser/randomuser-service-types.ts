import User from "model/user";

export interface RandomUserServiceResponse {
  results?: User[];
  info?: {
    results?: number;
    page?: number;
  };
  error?: string;
}

export interface RandomUserServiceType {
  loadUsers: () => Promise<RandomUserServiceResponse>;
}
