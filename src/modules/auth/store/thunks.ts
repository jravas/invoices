import { Dispatch } from "redux";
import {
  registrationRequest,
  registrationSuccess,
  registrationError,
  loginRequest,
  loginError,
  loginSuccess,
  clearReducers,
} from "./actions";
import Firebase, { AuthError, AuthUser } from "firebase-store/initial";

const firebase = new Firebase();

export const registerUserThunk = (email: string, password: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  let listener;
  dispatch(registrationRequest());

  await firebase.registration(email, password).catch((error: AuthError) => {
    dispatch(registrationError(error.message));
  });

  if (!listener) {
    listener = firebase.auth.onAuthStateChanged((user) => {
      if (!user) {
        dispatch(registrationError("Error"));
      } else {
        dispatch(registrationSuccess(user as AuthUser));
      }
    });
  }
};

export const loginUserThunk = (email: string, password: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  let listener;

  console.log("login");

  dispatch(loginRequest());

  const user = await firebase
    .login(email, password)
    .catch((error: AuthError) => {
      console.log("error", error);
      dispatch(loginError(error.message));
      return;
    });

  if (!user) {
    dispatch(loginError("Login success but no user"));
    return;
  }
  // dispatch(loginSuccess(user));
  if (!listener) {
    listener = firebase.auth.onAuthStateChanged((user) => {
      if (!user) {
        dispatch(loginError("Error"));
      } else {
        dispatch(loginSuccess(user));
      }
    });
  }
};

export const logoutUserThunk = () => async (
  dispatch: Dispatch
): Promise<void> => {
  const response = await firebase.logout();
  console.log(response);
  dispatch(clearReducers());
};
