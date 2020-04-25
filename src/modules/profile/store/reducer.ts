import { ProfileActionTypes, ProfileActions } from "./types";
import { Profile } from "../models";

interface State {
  profile: Profile | undefined;
  isLoading: boolean;
  error?: string;
}

export const initialState: State = {
  profile: undefined,
  isLoading: false,
  error: undefined,
};

export const authReducer = (
  state = initialState,
  action: ProfileActionTypes
) => {
  switch (action.type) {
    case ProfileActions.AddProfileRequest:
      return { ...state, isLoading: true, error: undefined };
    case ProfileActions.AddProfileSuccess:
      return { ...state, isLoading: false, error: undefined };
    case ProfileActions.GetProfileRequest:
      return { ...state, isLoading: true, error: undefined };
    case ProfileActions.GetProfileSuccess:
      return { ...state, isLoading: false, profile: action.payload };
    case ProfileActions.Error:
      return { ...state, isLoading: false, error: action.payload };
    case ProfileActions.ClearReducers:
      return initialState;

    default:
      return state;
  }
};
