import React from "react";
import Leaderboard from "../../components/Leaderboard/Leaderboard";

const Leaderbord = () => {
  return (
    <div className="flex justify-center w-full ">
      <div className="flex flex-col w-full max-w-xl px-4 labtop:px-2">
        <Leaderboard />
      </div>
    </div>
  );
};

export default Leaderbord;
