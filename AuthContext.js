import React, { useEffect, useState, useContext } from "react";

const AuthContext = React.createContext();
import { login } from "./apis";
const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  // const [email, setEmail] = useState("");
  // const [userId, setUserId] = useState("askjd");
  // const [profilePic, setProfilePic] = useState(null);
  // const [token, setToken] = useState(null);
  // const [name, setName] = useState("Durgesh Kumar");
  const [user, setUser] = useState(null);
  useEffect(() => {
    setIsLoading(true);
    const sawoPayloadLS = localStorage.getItem("sawoPayload");
    if (sawoPayloadLS) {
      const getUser = async (email) => {
        return new Promise(function (resolve, reject) {
          resolve(login(email));
        });
      };
      const verifyEmail = async (email) => {
        const res = await getUser(email);
        // console.log(res);
        setUser(res);
      };
      const LSUser = JSON.parse(sawoPayloadLS);
      verifyEmail(LSUser.identifier);
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        setIsLoading,
        user,
        setUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useGlobalAuthContext = () => {
  return useContext(AuthContext);
};

export { AuthContext, AuthProvider };
