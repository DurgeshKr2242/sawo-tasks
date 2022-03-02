import React, { useEffect, useState, useContext } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "./Firebase";

const AuthContext = React.createContext();
import { login } from "./apis";
const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const sawoPayloadLS = localStorage.getItem("sawoPayload");
      const LSUser = JSON.parse(sawoPayloadLS);
      console.log(LSUser);

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
        console.log(foundUser[0]);
        setUser(foundUser[0]);
      } else {
        setUser(null);
      }
    };
    getUser();
    // console.log(foundUser[0]);
  }, []);

  // useEffect(() => {
  //   setIsLoading(true);
  //   const sawoPayloadLS = localStorage.getItem("sawoPayload");
  //   const LSUser = JSON.parse(sawoPayloadLS);
  //   console.log(LSUser);
  //   // verifyEmail(LSUser.identifier);
  //   // if (sawoPayloadLS) {
  //   //   const getUser = async (email) => {
  //   //     return new Promise(function (resolve, reject) {
  //   //       resolve(login(email));
  //   //     });
  //   //   };
  //   //   const verifyEmail = async (email) => {
  //   //     const res = await getUser(email);
  //   //     // console.log(res);
  //   //     setUser(res);
  //   //   };
  //   //   const LSUser = JSON.parse(sawoPayloadLS);
  //   //   verifyEmail(LSUser.identifier);
  //   // } else setUser(null);
  //   if (LSUser.user_id) {
  //     const getUser = async (email) => {
  //       await login(email).then((res) => console.log(res));
  //     };
  //     getUser(LSUser);
  //     // const verifyEmail = async (email) => {
  //     //   const res = await getUser(email);
  //     //   // console.log(res);
  //     //   setUser(res);
  //     // };
  //     // const LSUser = JSON.parse(sawoPayloadLS);
  //     // verifyEmail(LSUser.identifier);
  //   } else setUser(null);
  //   setIsLoading(false);
  // }, []);

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
