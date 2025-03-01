import { UserModel } from "./UserModel";

export interface GetUsersResponseModel {
  users?: UserModel[];
  total?: number;
  skip?: number;
  limit?: number;
}
