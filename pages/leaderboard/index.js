import React, { useEffect, useState } from "react";
import Leaderboard from "../../components/Leaderboard/Leaderboard";
import {
  getMonthlyLeaderboard,
  getOverallLeaderboard,
  getWeeklyLeaderboard,
} from "../../apis";
import { useGlobalAuthContext } from "../../AuthContext";

const Leaderbord = () => {
  const { user } = useGlobalAuthContext();

  const [overallLeaderboard, setOverallLeaderboard] = useState([]);
  const [monthlyLeaderboard, setMonthlyLeaderboard] = useState([]);
  const [weeklyLeaderboard, setWeeklyLeaderboard] = useState([]);

  // if (user) {
  useEffect(() => {
    // console.log(user?.id);
    getOverallLeaderboard().then((posts) => {
      setOverallLeaderboard(posts);
      console.log(posts);
    });
    getMonthlyLeaderboard().then((posts) => {
      setMonthlyLeaderboard(posts);
      console.log(posts);
    });
    getWeeklyLeaderboard().then((posts) => {
      setWeeklyLeaderboard(posts);
      console.log(posts);
    });
  }, [user]);
  return (
    <div className="flex justify-center w-full ">
      <div className="flex flex-col w-full max-w-xl px-4 labtop:px-2">
        <Leaderboard
          overallLeaderboard={overallLeaderboard}
          monthlyLeaderboard={monthlyLeaderboard}
          weeklyLeaderboard={weeklyLeaderboard}
        />
      </div>
    </div>
  );
};

export default Leaderbord;
