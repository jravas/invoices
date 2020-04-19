import { AuthUser } from "firebase-store/initial";
enum Registration {
  RegistrationRequest = "REGISTRATION_REQUEST",
  RegistrationSuccess = "REGISTRATION_SUCCESS",
  RegistrationError = "REGISTRATION_ERROR",
}

enum Login {
  LoginRequest = "LOGIN_REQUEST",
  LoginSuccess = "LOGIN_SUCCESS",
  LoginError = "LOGIN_ERROR",
}

enum General {
  ClearReducers = "CLEAR_REDUCERS",
}

export const AuthActions = {
  Registration,
  Login,
  General,
};

export type AuthActions = typeof AuthActions;

interface RegistrationRequest {
  type: typeof AuthActions.Registration.RegistrationRequest;
}

interface RegistrationSuccess {
  type: typeof AuthActions.Registration.RegistrationSuccess;
  payload: AuthUser;
}

interface RegistrationError {
  type: typeof AuthActions.Registration.RegistrationError;
  payload: string;
}

interface LoginRequest {
  type: typeof AuthActions.Login.LoginRequest;
}

interface LoginSuccess {
  type: typeof AuthActions.Login.LoginSuccess;
  payload: AuthUser;
}

interface LoginError {
  type: typeof AuthActions.Login.LoginError;
  payload: string;
}

interface ClearReducers {
  type: typeof AuthActions.General.ClearReducers;
}

export type AuthActionsActionTypes =
  | RegistrationRequest
  | RegistrationSuccess
  | RegistrationError
  | LoginRequest
  | LoginSuccess
  | LoginError
  | ClearReducers;
// export type InvoiceActionTypes = SendMessageAction | DeleteMessageAction
