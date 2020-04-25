import { AuthActions } from "./actionTypes";
import { AuthUser } from "firebase-store/initial";

export const registrationRequest = () => ({
  type: AuthActions.RegistrationRequest,
});

export const loginRequest = () => ({
  type: AuthActions.LoginRequest,
});

export const authStateChanges = (user: AuthUser | null) => ({
  type: AuthActions.AuthStateChanges,
  payload: user,
});

export const error = (message: string) => ({
  type: AuthActions.Error,
});

export const clearReducers = () => ({
  type: AuthActions.ClearReducers,
});
