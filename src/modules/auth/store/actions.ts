import { AuthActions } from "./actionTypes";
import { AuthUser } from "firebase-store/initial";

/** Registration Actions*/
export const registrationRequest = () => ({
  type: AuthActions.Registration.RegistrationRequest,
});

export const registrationSuccess = (data: AuthUser) => ({
  type: AuthActions.Registration.RegistrationSuccess,
  payload: data,
});

export const registrationError = (message: string) => ({
  type: AuthActions.Registration.RegistrationError,
  payload: message,
});

/** Login Actions */
export const loginRequest = () => ({
  type: AuthActions.Login.LoginRequest,
});

export const loginSuccess = (user: AuthUser) => ({
  type: AuthActions.Login.LoginSuccess,
  payload: user,
});

export const loginError = (message: string) => ({
  type: AuthActions.Login.LoginError,
});

export const clearReducers = () => ({
  type: AuthActions.General.ClearReducers,
});
