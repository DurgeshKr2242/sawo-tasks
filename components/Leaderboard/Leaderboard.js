import React from "react";
import { useGlobalAuthContext } from "../../AuthContext";
const Leaderboard = () => {
  const { user } = useGlobalAuthContext();
  return (
    <div className="flex flex-col w-full gap-4 mb-8 font-semibold mt-28">
      <p>{user?.data?.name}</p>

      <ul className="flex flex-col w-full gap-6">
        <li className="border-b-[1px] px-2 border-yellow/40 pb-4 flex justify-between">
          <div className="flex gap-4">
            <p className="px-2 rounded-full bg-orange-400/90">1</p>
            <p>Durgesh Kumar</p>
          </div>
          <p>200</p>
        </li>

        <li className="border-b-[1px] px-2 border-yellow/40 pb-4 flex justify-between">
          <div className="flex gap-4">
            <p className="px-2 bg-green-300 rounded-full">2</p>
            <p>Durgesh Kumar</p>
          </div>
          <p>200</p>
        </li>

        <li className="border-b-[1px] px-2 border-yellow/40 pb-4 flex justify-between">
          <div className="flex gap-4">
            <p className="px-2 bg-gray-300 rounded-full">3</p>
            <p>Durgesh Kumar</p>
          </div>
          <p>200</p>
        </li>

        <li className="border-b-[1px] px-2 border-yellow/40 pb-4 flex justify-between">
          <div className="flex gap-4">
            <p className="px-2 rounded-full">4</p>
            <p>Durgesh Kumar</p>
          </div>
          <p>200</p>
        </li>
        <li className="border-b-[1px] px-2 border-yellow/40 pb-4 flex justify-between">
          <div className="flex gap-4">
            <p className="px-2 rounded-full">5</p>
            <p>Durgesh Kumar</p>
          </div>
          <p>200</p>
        </li>
        <li className="border-b-[1px] px-2 border-yellow/40 pb-4 flex justify-between">
          <div className="flex gap-4">
            <p className="px-2 rounded-full">6</p>
            <p>Durgesh Kumar</p>
          </div>
          <p>200</p>
        </li>
        <li className="border-b-[1px] px-2 border-yellow/40 pb-4 flex justify-between">
          <div className="flex gap-4">
            <p className="px-2 rounded-full">7</p>
            <p>Durgesh Kumar</p>
          </div>
          <p>200</p>
        </li>
        <li className="border-b-[1px] px-2 border-yellow/40 pb-4 flex justify-between">
          <div className="flex gap-4">
            <p className="px-2 rounded-full">8</p>
            <p>Durgesh Kumar</p>
          </div>
          <p>200</p>
        </li>
      </ul>
    </div>
  );
};

export default Leaderboard;
