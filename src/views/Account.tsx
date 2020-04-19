import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules/invoice/store/store";

import { logoutUserThunk } from "modules/auth/store/thunks";
import { Filters } from "components";
import { Login, Register } from "./";

import { AuthUser } from "firebase-store/initial";

enum AccountTabs {
  Login = "Login",
  Register = "Register",
}

const tabs = [AccountTabs.Login, AccountTabs.Register];
const initActive = AccountTabs.Login;

export const Account = () => {
  const { user, isLoading } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
  const [activeTab, setActiveTab] = useState("");

  const tabCallback = (tab: string) => {
    setActiveTab(tab);
  };

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };

  const renderUserInfo = (user: AuthUser | undefined) => {
    if (!user) {
      return;
    }

    return (
      <div>
        <p>{user.email}</p>
        <p>{user.displayName}</p>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </div>
    );
  };

  return (
    <div className="main">
      {!user && (
        <>
          <Filters
            initActive={initActive}
            parentCallback={tabCallback}
            tabs={tabs}
          ></Filters>
          {activeTab === AccountTabs.Login ? <Login /> : <Register />}
        </>
      )}
      {renderUserInfo(user)}
    </div>
  );
};
