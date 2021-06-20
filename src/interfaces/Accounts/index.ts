export interface IAccountsResponse {
  customer: IUser;
  refreshToken: string;
  token: string;
}

export interface IUser {
  email: string;
  password: string;
}
