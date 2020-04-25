import { ProfileActions } from "./types";
import { Profile } from "../models";

const addProfileRequest = () => ({
  type: ProfileActions.AddProfileRequest,
});

const addProfileSuccess = () => ({
  type: ProfileActions.AddProfileSuccess,
});

const getProfileRequest = () => ({
  type: ProfileActions.GetProfileRequest,
});

const getProfileSuccess = (profile: Profile) => ({
  type: ProfileActions.GetProfileSuccess,
  payload: profile,
});

const error = (message: string) => ({
  type: ProfileActions.Error,
  payload: message,
});

const clearReducers = () => ({
  type: ProfileActions.ClearReducers,
});

export const ProfileAction = {
  addProfileRequest,
  addProfileSuccess,
  getProfileRequest,
  getProfileSuccess,
  error,
  clearReducers,
};
