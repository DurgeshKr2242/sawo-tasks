import React, { useState } from "react";
import { useGlobalAuthContext } from "../../AuthContext";
import MonthlyLeaderboard from "./MonthlyLeaderboard";
import OverallLeaderboard from "./OverallLeaderboard";
import { toast } from "react-toastify";
import WeeklyLeaderboard from "./WeeklyLeaderboard";
import { resetWeeklyPoint, resetMonthlyPoint } from "../../apis";

const Leaderboard = ({
  overallLeaderboard,
  monthlyLeaderboard,
  weeklyLeaderboard,
}) => {
  const { user } = useGlobalAuthContext();
  const [activeInput, setActiveInput] = useState("OverallLeaderboard");
  const [loading, setLoading] = useState(false);

  const handleWeeklyReset = async () => {
    setLoading(true);
    await resetWeeklyPoint();
    toast("Weekly Points Reset!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setLoading(false);
  };
  const handleMonthlyReset = async () => {
    setLoading(true);
    await resetMonthlyPoint();
    toast("Monthly Points Reset!", {
      position: "bottom-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
    setLoading(false);
  };

  return (
    <div className="flex flex-col w-full gap-4 mt-8 mb-8 font-semibold">
      {user?.data.isAdmin && (
        <div className="flex flex-col justify-between w-full gap-5 mt-20 mobile-l:flex-row ">
          <button
            onClick={handleWeeklyReset}
            className="px-6 py-1 bg-red-400 rounded-lg cursor-pointer hover:bg-yellow/50"
          >
            Reset Weekly
          </button>

          <button
            onClick={handleMonthlyReset}
            className="px-6 py-1 bg-red-400 rounded-lg cursor-pointer hover:bg-yellow/50"
          >
            Reset Monthly
          </button>
        </div>
      )}

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
