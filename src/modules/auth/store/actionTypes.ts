import { AuthUser } from "firebase-store/initial";

enum General {
  RegistrationRequest = "REGISTRATION_REQUEST",
  LoginRequest = "LOGIN_REQUEST",
  ClearReducers = "CLEAR_REDUCERS",
  AuthStateChanges = "AUTH_STATE_CHANGED",
  Error = "AUTH_ERROR",
}

export const AuthActions = {
  ...General,
};

export type AuthActions = typeof AuthActions;

interface RegistrationRequest {
  type: typeof AuthActions.RegistrationRequest;
}

interface LoginRequest {
  type: typeof AuthActions.LoginRequest;
}

interface AuthStateChanges {
  type: typeof AuthActions.AuthStateChanges;
  payload: AuthUser | null;
}

interface ClearReducers {
  type: typeof AuthActions.ClearReducers;
}

interface Error {
  type: typeof AuthActions.Error;
  payload: string;
}

export type AuthActionsActionTypes =
  | RegistrationRequest
  | LoginRequest
  | AuthStateChanges
  | ClearReducers
  | Error;
