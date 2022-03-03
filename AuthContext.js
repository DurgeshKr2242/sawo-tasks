import React, { useEffect, useState, useContext } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./Firebase";

const AuthContext = React.createContext();
import { login } from "./apis";

// TODO: Do proper error handling if no user is found. Like we use SAWO and then check if the email id is present in the database or not.

const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const sawoPayloadLS = localStorage.getItem("sawoPayload");
      const LSUser = JSON.parse(sawoPayloadLS);
      // console.log(LSUser);

      if (LSUser) {
        const foundUser = [];
        const userRef = await collection(db, "user");
        const q = await query(
          userRef,
          where("emailId", "==", LSUser.identifier)
        );
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach((doc) => {
          foundUser.push({ id: doc.id, data: doc.data() });
        });
        // console.log(foundUser[0]);
        setUser(foundUser[0]);
      } else {
        setUser(null);
      }
    };
    getUser();
    // console.log(foundUser[0]);
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
