import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "modules/invoice/store/store";

import { logoutUserThunk } from "modules/auth/store/thunks";
import { Filters } from "components";
import { Login, Register, Collections } from "./";

import { AuthUser } from "firebase-store/initial";

enum AccountTabs {
  Login = "Login",
  Register = "Register",
  Account = "Account",
  Collections = "Collections",
}

export const Account = () => {
  const { user } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch();
  // tabs logic
  const [activeTab, setActiveTab] = useState(AccountTabs.Register);
  const [tabs, setTabs] = useState([AccountTabs.Register, AccountTabs.Login]);

  useEffect(() => {
    if (!user) {
      setTabs([AccountTabs.Register, AccountTabs.Login]);
      setActiveTab(AccountTabs.Register);
      return;
    }
    setTabs([AccountTabs.Account, AccountTabs.Collections]);
    setActiveTab(AccountTabs.Account);
  }, [user, setTabs, setActiveTab]);

  const tabCallback = (tab: any) => {
    setActiveTab(tab);
  };

  // # end of tabs logic

  const handleLogout = () => {
    dispatch(logoutUserThunk());
  };

  const renderUserInfo = (user: AuthUser | undefined) => {
    if (!user) {
      return;
    }

    return (
      <>
        {activeTab === AccountTabs.Account ? (
          <div>
            <p>{user.email}</p>
            <p>{user.displayName}</p>
            <button type="button" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <Collections user={user.uid} />
        )}
      </>
    );
  };

  return (
    <div className="main">
      <Filters
        initActive={activeTab}
        parentCallback={tabCallback}
        tabs={tabs}
      ></Filters>
      {!user && (
        <>{activeTab === AccountTabs.Login ? <Login /> : <Register />}</>
      )}
      {renderUserInfo(user)}
    </div>
  );
};
