import axios from "axios";
import { mocked } from "ts-jest/utils";
import { loadUsers } from "./randomuser-service";

const mockedAxios = mocked(axios, true);

it("throws error when error data received", () => {
  const response = { data: { error: "TEST" } };
  mockedAxios.get = jest.fn().mockReturnValue(response);

  return expect(loadUsers()).rejects.toThrow(response.data.error);
});
