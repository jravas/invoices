import { AuthActionsActionTypes, AuthActions } from "./actionTypes";
import { AuthUser } from "firebase-store/initial";

interface State {
  user?: AuthUser;
  isLoading: boolean;
  error?: string;
}

export const initialState: State = {
  user: undefined,
  isLoading: false,
  error: undefined,
};

export const authReducer = (
  state = initialState,
  action: AuthActionsActionTypes
) => {
  switch (action.type) {
    case AuthActions.RegistrationRequest:
      return { ...state, isLoading: true, error: undefined };
    case AuthActions.LoginRequest:
      return { ...state, isLoading: true, error: undefined };
    case AuthActions.Error:
      return { ...state, isLoading: false, error: action.payload };
    case AuthActions.AuthStateChanges:
      return { ...state, isLoading: false, user: action.payload };
    case AuthActions.ClearReducers:
      return initialState;

    default:
      return state;
  }
};
