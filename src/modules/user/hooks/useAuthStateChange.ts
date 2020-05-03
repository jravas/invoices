import { useCallback } from "react";
import { useUserServices } from "modules/user";

export const useAuthStateChange = () => {
  const [, { updateUserData, resetUserData }] = useUserServices();

  const handleAuthChange = useCallback(
    async (userAuth) => {
      if (userAuth) {
        console.log("Loged in with data:", userAuth);
        updateUserData(userAuth);

        return;
      }

      console.log("no userAuth", userAuth);

      resetUserData();
    },
    [resetUserData, updateUserData]
  );

  return handleAuthChange;
};
