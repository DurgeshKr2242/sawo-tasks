import React, { useState } from "react";
import GlobalActivity from "./GlobalActivity";
import PersonalActivity from "./PersonalActivity";

const MainActivityArea = ({ userActivity, globalActivity }) => {
  const [activeInput, setActiveInput] = useState("PersonalActivity");

  return (
    <div className="flex flex-col w-full gap-4 mt-8 mb-8 font-semibold">
      <div className="flex flex-col justify-between w-full gap-5 mt-20 mobile-l:flex-row ">
        <p
          onClick={() => setActiveInput("PersonalActivity")}
          className={`${
            activeInput === "PersonalActivity"
              ? "bg-yellow "
              : "border-2 border-yellow"
          } px-6 py-1 rounded-lg cursor-pointer hover:bg-yellow/50`}
        >
          Personal
        </p>

        <p
          onClick={() => setActiveInput("GlobalActivity")}
          className={`${
            activeInput === "GlobalActivity"
              ? "bg-yellow "
              : "border-2 border-yellow"
          } px-6 py-1 rounded-lg cursor-pointer hover:bg-yellow/50`}
        >
          Global
        </p>
      </div>

      {activeInput === "PersonalActivity" ? (
        <PersonalActivity userActivity={userActivity} />
      ) : (
        <GlobalActivity globalActivity={globalActivity} />
      )}
    </div>
  );
};

export default MainActivityArea;
