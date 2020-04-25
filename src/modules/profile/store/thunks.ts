import { Dispatch } from "redux";
import { ProfileAction } from "./actions";
import Firebase from "firebase-store/initial";

const firebase = new Firebase();

export const addProfileThunk = (id: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  console.log("id arrived to other  thunk :): addProfileThunk");
  //   await firebase.invoices().doc(id).set({ id });
  dispatch(ProfileAction.clearReducers());
};

export const getProfileThunk = (id: string) => async (
  dispatch: Dispatch
): Promise<void> => {
  dispatch(ProfileAction.getProfileRequest());

  const profile = await firebase.profiles().doc(id).get();
  console.log("profile from fb", profile);
};
