import React from "react";

const MonthlyLeaderboard = ({ monthlyLeaderboard }) => {
  return (
    <ul className="flex flex-col w-full gap-6">
      {monthlyLeaderboard.map((data, i) => {
        return (
          <li className="border-b-[1px] px-2 border-yellow/40 pb-4 flex justify-between">
            <div className="flex items-center gap-4">
              <p
                className={`px-3 py-1 rounded-full ${
                  i == 0 && "bg-orange-400/90"
                } 
                  ${i == 1 && "bg-green-300"}
                      ${i == 2 && "bg-gray-300"}
              `}
              >
                {i + 1}
              </p>
              <p>{data.data.name}</p>
            </div>
            <p>{data.data.monthlyPoints}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default MonthlyLeaderboard;
