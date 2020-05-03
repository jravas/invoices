import React, { useState, useEffect } from "react";
import { Filters } from "components";
import { Login, Register } from "./";
import { useUserServices } from "modules/user";

// import { AuthUser } from "firebase-store/initial";

enum AccountTabs {
  Login = "Login",
  Register = "Register",
  Profile = "Profile",
}

export const Account = () => {
  const [{ userData }] = useUserServices();
  /** tabs logic
   *  TODO: add to custom hook
   */
  const [activeTab, setActiveTab] = useState(AccountTabs.Register);
  const [tabs, setTabs] = useState([AccountTabs.Register, AccountTabs.Login]);

  useEffect(() => {
    if (!userData) {
      setTabs([AccountTabs.Register, AccountTabs.Login]);
      setActiveTab(AccountTabs.Register);
      return;
    }
    setTabs([AccountTabs.Profile]);
    setActiveTab(AccountTabs.Profile);
  }, [setTabs, setActiveTab, userData]);

  const tabCallback = (tab: any) => {
    setActiveTab(tab);
  };
  /* # end of tabs logic */

  return (
    <div className="main">
      <Filters
        initActive={activeTab}
        parentCallback={tabCallback}
        tabs={tabs}
      ></Filters>
      {!userData &&
        (activeTab === AccountTabs.Register ? <Register /> : <Login />)}

      {userData && (
        <div>
          <p>{userData.email}</p>
        </div>
      )}
      <svg
        width="260"
        height="360"
        viewBox="0 0 251 349"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`app__deco app__deco--default`}
      >
        <path />
      </svg>
    </div>
  );
};
