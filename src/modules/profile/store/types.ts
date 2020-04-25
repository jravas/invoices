import { Profile } from "../models";

enum AddActions {
  AddProfileRequest = "ADD_PROFILE_REQUEST",
  AddProfileSuccess = "ADD_PROFILE_SUCCES",
}

enum General {
  GetProfileRequest = "GET_PROFILE_REQUEST",
  GetProfileSuccess = "GET_PROFILE_SUCCES",
  Error = "PROFILE_ERROR",
  ClearReducers = "PROFILE_CLEAR_REDUCERS",
}

export const ProfileActions = {
  ...AddActions,
  ...General,
};

export type ProfileActions = typeof ProfileActions;

interface AddProfileRequest {
  type: typeof ProfileActions.AddProfileRequest;
}

interface AddProfileSuccess {
  type: typeof ProfileActions.AddProfileSuccess;
}

interface GetProfileRequest {
  type: typeof ProfileActions.GetProfileRequest;
}

interface GetProfileSuccess {
  type: typeof ProfileActions.GetProfileSuccess;
  payload: Profile;
}

interface Error {
  type: typeof ProfileActions.Error;
  payload: string;
}

interface ClearReducers {
  type: typeof ProfileActions.ClearReducers;
}

export type ProfileActionTypes =
  | AddProfileRequest
  | AddProfileSuccess
  | GetProfileRequest
  | GetProfileSuccess
  | Error
  | ClearReducers;
