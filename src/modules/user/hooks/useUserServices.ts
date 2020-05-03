import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getUserData,
  UserState,
  UserActionTypes,
  getOrCreateUserProfile,
} from "modules/user";

export type CustomHook<S, A> = () => [S, A];

interface Api {
  updateUserData: (user: firebase.UserInfo) => void;
  resetUserData: VoidFunction;
}

export const useUserServices: CustomHook<UserState, Api> = () => {
  const dispatch = useDispatch();

  const user = useSelector(getUserData);

  const updateUserData = React.useCallback(
    async (userData: firebase.UserInfo) => {
      dispatch({ type: UserActionTypes.Request });
      const payload = await getOrCreateUserProfile(userData);
      if (typeof payload === "string") {
        dispatch({
          type: UserActionTypes.Error,
          payload,
        });
        return;
      }
      dispatch({
        type: UserActionTypes.Success,
        payload,
      });
    },
    [dispatch]
  );

  const resetUserData = React.useCallback(() => {
    dispatch({ type: UserActionTypes.Reset });
  }, [dispatch]);

  const state = user;

  const api = React.useMemo(
    () => ({
      updateUserData,
      resetUserData,
    }),
    [resetUserData, updateUserData]
  );

  return [state, api];
};
