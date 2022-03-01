import { useRouter } from "next/router";
import React from "react";
import { GoThreeBars } from "react-icons/go";
import { useGlobalAuthContext } from "../../AuthContext";
const Navbar = () => {
  const router = useRouter();
  const { user } = useGlobalAuthContext();
  return (
    <div key="help" className="flex justify-center w-full">
      <div className="flex items-center justify-between w-full px-8 py-6 text-sm font-bold max-w-7xl labtop:px-2">
        <div>
          <h1 className="text-lg">SAWOTasks</h1>
        </div>

        <div className="items-center hidden gap-16 tablet:flex">
          <ul className="flex gap-5">
            <li
              onClick={() => router.push("/addTask")}
              className="relative cursor-pointer group"
            >
              Add Task
              <div className="absolute w-0 h-1 transition-all duration-300 -bottom-1 bg-yellow group-hover:w-full"></div>
            </li>
            <li
              className="relative cursor-pointer group "
              onClick={() => router.push("/leaderboard")}
            >
              Leaderbord
              <div className="absolute w-0 h-1 transition-all duration-300 -bottom-1 bg-yellow group-hover:w-full"></div>
            </li>
            <li
              onClick={() => router.push("/approve")}
              className="relative cursor-pointer group"
            >
              Approve
              <div className="absolute w-0 h-1 transition-all duration-300 -bottom-1 bg-yellow group-hover:w-full"></div>
            </li>
            <li className="relative cursor-pointer ">
              Scoring Schema
              <div className="absolute w-0 h-1 transition-all duration-300 -bottom-1 bg-yellow group-hover:w-full"></div>
            </li>
          </ul>

          <div className="flex gap-5 ">
            {user ? (
              <button
                onClick={() => {
                  localStorage.removeItem("sawoPayload");
                  router.reload(window.location.pathname);
                }}
                className="button-primary"
              >
                logout
              </button>
            ) : (
              <button
                onClick={() => router.push("/auth/login")}
                className="button-primary"
              >
                Login
              </button>
            )}

            {/* <button className="button-secondary">SignUp</button> */}
          </div>
        </div>
        <GoThreeBars className="flex text-3xl tablet:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
