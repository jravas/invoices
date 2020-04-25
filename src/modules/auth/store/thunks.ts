import { Dispatch } from "redux";
import {
  registrationRequest,
  loginRequest,
  clearReducers,
  authStateChanges,
  error,
} from "./actions";
import Firebase, { AuthError } from "firebase-store/initial";

const firebase = new Firebase();

export const initAuthListenr = () => async (
  dispatch: Dispatch
): Promise<void> => {
  let listener;
  if (listener) {
    return;
  }
  listener = firebase.auth.onAuthStateChanged((user) => {
    if (!user) {
      dispatch(authStateChanges(user));
    } else {
      dispatch(authStateChanges(user));
    }
  });
};

export const registerUserThunk = (email: string, password: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch(registrationRequest());

  const response = await firebase
    .registration(email, password)
    .catch((err: AuthError) => {
      dispatch(error(err.message));
    });

  if (!response || !response.user) {
    dispatch(error("Problem with creating user."));
    return;
  }
  const id = response.user.uid;
  const profileWrite = await firebase.setProfile(id);
  console.log("profileWrite", profileWrite);
};

export const loginUserThunk = (email: string, password: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch(loginRequest());
  await firebase.login(email, password).catch((err: AuthError) => {
    dispatch(error(err.message));
    return;
  });
};

export const logoutUserThunk = () => async (
  dispatch: Dispatch
): Promise<void> => {
  await firebase.logout();
  dispatch(clearReducers());
};
