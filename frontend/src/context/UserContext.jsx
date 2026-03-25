import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import { authDataContext } from "./authcontext";


export const userDataContext = createContext();
function UserContext({ children }) {
  let [userData, setUserData] = useState("");
  let { serverUrl } = useContext(authDataContext);

  const getCurrentUser = async () => {
    try {
      let result = await axios.get(serverUrl + "/api/user/getcurrentuser", {
        withCredentials: true,
      });
      setUserData(result.data);
      console.log(result.data);
    } catch (error) {
      setUserData(null);
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  let value = {
    userData,
    setUserData,
    getCurrentUser
  };

  return (
    <userDataContext.Provider value={value}>
      {children}
    </userDataContext.Provider>
  );
}

export default UserContext;
