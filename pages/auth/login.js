import React, { useState, useEffect } from "react";
import SawoLogin from "sawo-react";
import { login } from "../../apis";
import { useRouter } from "next/router";
const Login = () => {
  const router = useRouter();
  const [payloadEmail, setPayloadEmail] = useState("");
  const [foundUser, setFoundUser] = useState(null);

  useEffect(() => {
    if (localStorage.getItem("sawoPayload")) {
      router.push("/addTask");
    }
  }, []);

  const getUser = async (email) => {
    return new Promise(function (resolve, reject) {
      resolve(login(email));
    });
  };

  const sawoLoginCallback = async (payload) => {
    console.log(JSON.stringify(payload));
    localStorage.setItem("sawoPayload", JSON.stringify(payload));
    router.reload(window.location.pathname);
  };

  const sawoConfig = {
    onSuccess: sawoLoginCallback,
    identifierType: "email",
    apiKey: "415bb60f-fea6-4ee3-a4ed-180f53b1f52b",
    containerHeight: "500px",
  };

  return (
    <div className="flex justify-center w-full">
      <div className="max-w-[600px] p-5  flex flex-col items-center">
        <h1 onClick={() => console.log(foundUser?.name)} className="text-2xl">
          Welcome to SAWO Tasks
        </h1>
        <h2>{foundUser?.name}</h2>
        <SawoLogin key="login" config={sawoConfig} />
      </div>
    </div>
  );
};

export default Login;
