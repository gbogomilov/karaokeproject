export interface UserState {
  user: {
    displayName: string;
    firstName: string;
    lastName: string;
    email: string;
    token: string;
    isLoggedIn: boolean;
  };
}
export interface UserType {
  displayName: string;
  firstName: string;
  lastName: string;
  email: string;
  token: string;
  isLoggedIn: boolean;
}
