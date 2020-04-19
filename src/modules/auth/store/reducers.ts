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
    case AuthActions.Registration.RegistrationRequest:
      return { ...state, isLoading: true, error: undefined };
    case AuthActions.Registration.RegistrationSuccess:
      return {
        ...state,
        isLoading: false,
        error: undefined,
        user: action.payload,
      };
    case AuthActions.Registration.RegistrationError:
      return { ...state, isLoading: false, error: action.payload };

    case AuthActions.Login.LoginRequest:
      return { ...state, isLoading: true, error: undefined };
    case AuthActions.Login.LoginSuccess:
      return {
        ...state,
        isLoading: false,
        error: undefined,
        user: action.payload,
      };
    case AuthActions.Login.LoginError:
      return { ...state, isLoading: false, error: action.payload };
    case AuthActions.General.ClearReducers:
      return initialState;

    default:
      return state;
  }
};
