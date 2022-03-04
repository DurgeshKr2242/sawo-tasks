import React, { useState } from "react";
import { useGlobalAuthContext } from "../../AuthContext";
import MonthlyLeaderboard from "./MonthlyLeaderboard";
import OverallLeaderboard from "./OverallLeaderboard";
import WeeklyLeaderboard from "./WeeklyLeaderboard";
const Leaderboard = ({
  overallLeaderboard,
  monthlyLeaderboard,
  weeklyLeaderboard,
}) => {
  const { user } = useGlobalAuthContext();
  const [activeInput, setActiveInput] = useState("OverallLeaderboard");
  return (
    <div className="flex flex-col w-full gap-4 mt-8 mb-8 font-semibold">
      <div className="flex flex-col justify-between w-full gap-5 mt-20 mobile-l:flex-row ">
        <p
          onClick={() => setActiveInput("OverallLeaderboard")}
          className="px-6 py-1 bg-red-400 rounded-lg cursor-pointer hover:bg-yellow/50"
        >
          Reset Weekly
        </p>

        <p
          onClick={() => setActiveInput("MonthlyLeaderboard")}
          className="px-6 py-1 bg-red-400 rounded-lg cursor-pointer hover:bg-yellow/50"
        >
          Reset Monthly
        </p>
      </div>

      <div className="flex flex-col justify-between w-full gap-5 mt-20 mobile-l:flex-row ">
        <p
          onClick={() => setActiveInput("OverallLeaderboard")}
          className={`${
            activeInput === "OverallLeaderboard"
              ? "bg-yellow "
              : "border-2 border-yellow"
          } px-6 py-1 rounded-lg cursor-pointer hover:bg-yellow/50`}
        >
          Personal
        </p>

        <p
          onClick={() => setActiveInput("MonthlyLeaderboard")}
          className={`${
            activeInput === "MonthlyLeaderboard"
              ? "bg-yellow "
              : "border-2 border-yellow"
          } px-6 py-1 rounded-lg cursor-pointer hover:bg-yellow/50`}
        >
          Monthly
        </p>
        <p
          onClick={() => setActiveInput("WeeklyLeaderboard")}
          className={`${
            activeInput === "WeeklyLeaderboard"
              ? "bg-yellow "
              : "border-2 border-yellow"
          } px-6 py-1 rounded-lg cursor-pointer hover:bg-yellow/50`}
        >
          Weekly
        </p>
      </div>
      <div className="mt-14">
        {activeInput === "OverallLeaderboard" ? (
          <OverallLeaderboard overallLeaderboard={overallLeaderboard} />
        ) : activeInput === "MonthlyLeaderboard" ? (
          <MonthlyLeaderboard monthlyLeaderboard={monthlyLeaderboard} />
        ) : (
          <WeeklyLeaderboard weeklyLeaderboard={weeklyLeaderboard} />
        )}
      </div>
    </div>
  );
};

export default Leaderboard;
