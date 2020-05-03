import { UserActionTypes } from "modules/user";
import { ActionUnion, createAction } from "modules/redux-store";
import { UserProfile } from "modules/user";

export const UserActions = {
  Request: () => createAction(UserActionTypes.Request),

  Success: (userData: UserProfile) =>
    createAction(UserActionTypes.Success, userData),

  Error: (error?: string) => createAction(UserActionTypes.Error, error),
  Reset: () => createAction(UserActionTypes.Reset),
};

export type UserActions = ActionUnion<typeof UserActions>;
